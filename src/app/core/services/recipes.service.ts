import { Injectable } from '@angular/core';
import { BehaviorSubject, EMPTY, map, Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { DietType } from '../types/diet-type.enum';
import { IntoleranceType } from '../types/intolerance.enum';
import { SortRecipeType } from '../types/sort-recipe.enum';
import { IngredientsService } from '../../features/search-recipe/services/ingredients.service';
import { environment } from '../../environment/environment';
import { Recipe, RecipeResponse } from '../types/recipe.interface';
import { RecipeTimesType } from '../types/recipe-times.enum';
import { RecipeFilter } from '../models/recipe-filter.model';

@Injectable({
   providedIn: 'root'
})
export class RecipesService {

   complexSearch = "https://api.spoonacular.com/recipes/complexSearch";
   detailedRecipeUrl: string = "https://api.spoonacular.com/recipes/";

   totalResultsRecipes$ = new BehaviorSubject<number>(null);

   recipes$ = new BehaviorSubject<RecipeResponse | null>(null);
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

      let timeInMinutes: number = this.getMaxReadyTime(recipeTime);

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
      let params = new HttpParams().set('apiKey', environment.apiKey)
      let url = `${this.detailedRecipeUrl}${id}/information`;

      return this.http.get(url, { params })
   }

   private getMaxReadyTime(recipeTime: RecipeTimesType | null) {
      switch (recipeTime) {
         case RecipeTimesType.UNDER_15_MIN: return 15;
         case RecipeTimesType.UNDER_30_MIN: return 30;
         case RecipeTimesType.UNDER_60_MIN: return 60;
         default: return null;
      }
   }

   getSimilarRecipes(id: string): Observable<any> {
      // return this.http.get(`${this.baseApi}${id}/similar?${this.apiKey}`)
      // TODO
      return EMPTY;
   }
}
