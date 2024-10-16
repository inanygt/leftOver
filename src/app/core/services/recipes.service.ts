import { Injectable } from "@angular/core";
import {
  BehaviorSubject,
  combineLatest,
  EMPTY,
  Observable,
  of,
  tap,
} from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";
import { DietType } from "../types/diet-type.enum";
import { IntoleranceType } from "../types/intolerance.enum";
import { SortRecipeType } from "../types/sort-recipe.enum";
import { IngredientsService } from "../../features/search-recipe/services/ingredients.service";
import { environment } from "../../environment/environment";
import { RecipeResponse } from "../types/recipe.interface";
import { RecipeTimesType } from "../types/recipe-times.enum";
import { LocalStorageService } from "./local-storage";
import { LoadingService } from "../../shared/services/loading.service";

@Injectable({
  providedIn: "root",
})
export class RecipesService {
  complexSearch = "https://api.spoonacular.com/recipes/complexSearch";
  detailedRecipeUrl: string = "https://api.spoonacular.com/recipes/";

  recipes$ = new BehaviorSubject<RecipeResponse | null>(null);
  recipeId$ = new BehaviorSubject<string>(null);
  similarRecipes$ = new BehaviorSubject<any[]>([]);

  ingredients$ = this.ingredientsService.ingredients$;

  selectedDiet$ = new BehaviorSubject<DietType | null>(DietType.ALL);
  selectedIntolerances$ = new BehaviorSubject<IntoleranceType[] | []>([]);
  selectedSortOption$ = new BehaviorSubject<SortRecipeType | null>(null);
  selectedTimeOption$ = new BehaviorSubject<RecipeTimesType | null>(null);

  recipeFilter$ = combineLatest([
    this.ingredients$,
    this.selectedIntolerances$,
    this.selectedSortOption$,
    this.selectedTimeOption$,
  ]);

  constructor(
    private http: HttpClient,
    private ingredientsService: IngredientsService,
    public localStorageService: LocalStorageService,
    public loadingService: LoadingService
  ) {}

  // todo: refactor using solid principle
  searchRecipe(): Observable<RecipeResponse> {
    const cachedRecipes = this.localStorageService.getRecipes();
    this.loadingService.isLoading$.next(true);

    // for development purposes to not exceed the 150 api call limit
    // if (cachedRecipes) {
    //   this.loadingService.isLoading$.next(false);
    //   return of(cachedRecipes);
    // }

    const ingredients = this.ingredientsService.ingredients$.getValue();
    const preparedIngredients = ingredients
      .map((ingredient) => ingredient.text)
      .join(",");

    if (ingredients.length == 0) {
      return of({
        results: [],
        offset: 0,
        number: 0,
        totalResults: 0,
      });
    }

    const dietType = this.selectedDiet$.getValue();
    const intolerances = this.selectedIntolerances$.getValue().join(",");
    const sortOption = this.selectedSortOption$.getValue();
    const recipeTime = this.selectedTimeOption$.getValue();

    let timeInMinutes: number = this.getMaxReadyTime(recipeTime);

    let params = new HttpParams()
      .set("apiKey", environment.apiKey)
      .set("addRecipeInformation", "true")
      .set("fillIngredients", "true")
      .set("addRecipeInstructions", "true")
      .set("includeIngredients", preparedIngredients);

    if (intolerances.length > 0) {
      params = params.set("intolerances", intolerances);
    }

    if (dietType !== DietType.ALL) {
      params = params.set("diet", dietType);
    }

    if (sortOption) {
      params = params.set("sort", sortOption);
    }

    if (recipeTime) {
      params = params.set("maxReadyTime", timeInMinutes);
    }

    return this.http.get<RecipeResponse>(this.complexSearch, { params }).pipe(
      tap((recipes: RecipeResponse) => {
        if (!cachedRecipes) {
          this.localStorageService.setRecipes(recipes);
        }
      }),
      tap(() => this.loadingService.isLoading$.next(false))
    );
  }

  getRecipeById(id: string): Observable<any> {
    let params = new HttpParams().set("apiKey", environment.apiKey);
    let url = `${this.detailedRecipeUrl}${id}/information`;

    return this.http.get(url, { params });
  }

  private getMaxReadyTime(recipeTime: RecipeTimesType | null) {
    switch (recipeTime) {
      case RecipeTimesType.UNDER_15_MIN:
        return 15;
      case RecipeTimesType.UNDER_30_MIN:
        return 30;
      case RecipeTimesType.UNDER_60_MIN:
        return 60;
      default:
        return null;
    }
  }

  getSimilarRecipes(id: string): Observable<any> {
    // return this.http.get(`${this.baseApi}${id}/similar?${this.apiKey}`)
    // todo
    return EMPTY;
  }
}
