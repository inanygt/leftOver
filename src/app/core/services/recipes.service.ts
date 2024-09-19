import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DietType } from '../types/dietType.enum';

@Injectable({
   providedIn: 'root'
})
export class RecipesService {
   recipes$ = new BehaviorSubject<any[]>([]);
   recipeId$ = new BehaviorSubject<string>(null);
   similarRecipes$ = new BehaviorSubject<any[]>([]);

   constructor(private http: HttpClient) {
   }

   apiUrl = "https://api.spoonacular.com/recipes/complexSearch?apiKey=f7b667c5b33b40dcbb0f44cd03ab8b67&addRecipeInformation=true&fillIngredients=true&includeIngredients=";
   apiKey = 'apiKey=f7b667c5b33b40dcbb0f44cd03ab8b67';

   TODO // refactor and structure api

   // api = 'https://api.spoonacular.com/recipes/complexSearch?';
   // recipeInformation = '&addRecipeInformation=true'

   // addRecipeInformation(string: boolean) {
   //    return `addRecipeInformation=${string}`;
   // }

   baseApi: string = "https://api.spoonacular.com/recipes/";

   getRecipeById(id: string): Observable<any> {
      return this.http.get(`${this.baseApi}${id}/information?apiKey=f7b667c5b33b40dcbb0f44cd03ab8b67`)
   }

   searchRecipe(ingredients: any, dietType: DietType = DietType.ALL): Observable<any> {
      let url = this.apiUrl + ingredients;

      if (dietType !== DietType.ALL) {
         url += `&diet=${dietType}`
      }

      return this.http.get(url)
   }

   getSimilarRecipes(id: string): Observable<any> {
      return this.http.get(`${this.baseApi}${id}/similar?${this.apiKey}`)
   }
}
