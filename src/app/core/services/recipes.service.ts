import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DietType } from '../types/dietType.enum';
import { IntoleranceType } from '../types/intoleranceType.enum';
import { SortRecipeType } from '../types/sortRecipeType.enum';
import { IngredientsService } from '../../features/search-recipe/services/ingredients.service';

@Injectable({
   providedIn: 'root'
})
export class RecipesService {

   apiUrl = "https://api.spoonacular.com/recipes/complexSearch?apiKey=f7b667c5b33b40dcbb0f44cd03ab8b67&addRecipeInformation=true&fillIngredients=true&includeIngredients=";
   apiKey = 'apiKey=f7b667c5b33b40dcbb0f44cd03ab8b67';

   TODO // refactor and structure api

   // api = 'https://api.spoonacular.com/recipes/complexSearch?';
   // recipeInformation = '&addRecipeInformation=true'

   // addRecipeInformation(string: boolean) {
   //    return `addRecipeInformation=${string}`;
   // }

   baseApi: string = "https://api.spoonacular.com/recipes/";



   recipes$ = new BehaviorSubject<any[]>([]);
   recipeId$ = new BehaviorSubject<string>(null);
   similarRecipes$ = new BehaviorSubject<any[]>([]);

   selectedDiet$ = new BehaviorSubject<DietType | null>(DietType.ALL);
   selectedIntolerances$ = new BehaviorSubject<IntoleranceType[] | []>([]);

   selectedSortOption$ = new BehaviorSubject<SortRecipeType | null>(null);

   constructor(
      private http: HttpClient,
      private ingredientsService: IngredientsService
   ) {
   }

   getRecipeById(id: string): Observable<any> {
      return this.http.get(`${this.baseApi}${id}/information?apiKey=f7b667c5b33b40dcbb0f44cd03ab8b67`)
   }

   searchRecipe(): Observable<any> {

      const ingredients = this.ingredientsService.ingredients$.getValue();
      const preparedIngredients = ingredients.map((ingredient) => ingredient.text).join(',')
      const dietType = this.selectedDiet$.getValue();
      const intolerances = this.selectedIntolerances$.getValue().join(',');
      const sortOption = this.selectedSortOption$.getValue();

      let url = this.apiUrl + preparedIngredients;

      if (intolerances.length > 0) {
         url += `&intolerances=${intolerances}`;
      }

      if (dietType !== DietType.ALL) {
         url += `&diet=${dietType}`;
      }

      if (sortOption !== null) {
         url += `&sort=${sortOption}`
      }

      return this.http.get(url)
   }

   getSimilarRecipes(id: string): Observable<any> {
      return this.http.get(`${this.baseApi}${id}/similar?${this.apiKey}`)
   }
}
