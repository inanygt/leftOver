import { Injectable } from '@angular/core';
import { BehaviorSubject, EMPTY, map, Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { DietType } from '../types/dietType.enum';
import { IntoleranceType } from '../types/intoleranceType.enum';
import { SortRecipeType } from '../types/sortRecipeType.enum';
import { IngredientsService } from '../../features/search-recipe/services/ingredients.service';
import { environment } from '../../environment/environment';
import { Recipe, RecipeResponse } from '../types/recipe.interface';
import { RecipeTimesType } from '../types/recipeTimes.enum';

@Injectable({
   providedIn: 'root'
})
export class RecipesService {

   complexSearch = "https://api.spoonacular.com/recipes/complexSearch";
   baseApi: string = "https://api.spoonacular.com/recipes/";

   recipes$ = new BehaviorSubject<any[]>([]);
   recipeId$ = new BehaviorSubject<string>(null);
   similarRecipes$ = new BehaviorSubject<any[]>([]);

   selectedDiet$ = new BehaviorSubject<DietType | null>(DietType.ALL);
   selectedIntolerances$ = new BehaviorSubject<IntoleranceType[] | []>([]);
   selectedSortOption$ = new BehaviorSubject<SortRecipeType | null>(null);
   selectedTimeOption$ = new BehaviorSubject<RecipeTimesType | null>(null);

   constructor(
      private http: HttpClient,
      private ingredientsService: IngredientsService
   ) {
   }

   searchRecipe(): Observable<RecipeResponse> {

      const ingredients = this.ingredientsService.ingredients$.getValue();
      const preparedIngredients = ingredients.map((ingredient) => ingredient.text).join(',')
      const dietType = this.selectedDiet$.getValue();
      const intolerances = this.selectedIntolerances$.getValue().join(',');
      const sortOption = this.selectedSortOption$.getValue();
      const recipeTime = this.selectedTimeOption$.getValue();

      let timeInMinutes: number;

      switch (recipeTime) {
         case RecipeTimesType.UNDER_15_MIN:
            timeInMinutes = 15;
            break;
         case RecipeTimesType.UNDER_30_MIN:
            timeInMinutes = 30;
            break;
         case RecipeTimesType.UNDER_60_MIN:
            timeInMinutes = 60;
            break;
         default:
            timeInMinutes = 0;
      }

      console.log(recipeTime)

      let params = new HttpParams()
         .set('apiKey', environment.apiKey)
         .set('addRecipeInformation', 'true')
         .set('fillIngredients', 'true')
         .set('addRecipeInstructions', 'true')
         .set('includeIngredients', preparedIngredients)

      if (intolerances.length > 0) {
         params = params.set('intolerances', intolerances)
      }

      if (dietType !== DietType.ALL) {
         params = params.set('diet', dietType)

      }

      if (sortOption !== null) {
         params = params.set('sortOption', sortOption)
      }

      if (recipeTime !== null) {
         params = params.set('maxReadyTime', timeInMinutes)
      }

      return this.http.get<RecipeResponse>(this.complexSearch, { params })
   }

   getRecipeById(id: string): Observable<any> {
      return this.http.get(`${this.baseApi}${id}/information?apiKey=f7b667c5b33b40dcbb0f44cd03ab8b67`)
   }

   getSimilarRecipes(id: string): Observable<any> {
      // return this.http.get(`${this.baseApi}${id}/similar?${this.apiKey}`)
      // TODO
      return EMPTY;
   }
}
