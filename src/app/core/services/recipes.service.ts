import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
   providedIn: 'root'
})
export class RecipesService {
   recipes$ = new BehaviorSubject<any[]>([]);
   recipeId$ = new BehaviorSubject<string>(null);
   similarRecipes$ = new BehaviorSubject<any[]>(null);

   constructor(private http: HttpClient) {
   }

   apiKey = 'apiKey=f7b667c5b33b40dcbb0f44cd03ab8b67';
   apiUrl = "https://api.spoonacular.com/recipes/findByIngredients?apiKey=f7b667c5b33b40dcbb0f44cd03ab8b67&ingredients=";

   baseApi: string = "https://api.spoonacular.com/recipes/";

   getRecipeById(id: string): Observable<any> {
      return this.http.get(`${this.baseApi}${id}/information?apiKey=f7b667c5b33b40dcbb0f44cd03ab8b67`)
   }

   searchRecipe(ingredients: any): Observable<any> {
      return this.http.get(this.apiUrl + ingredients)
   }

   getSimilarRecipes(id: string): Observable<any> {
      return this.http.get(`${this.baseApi}${id}/similar?${this.apiKey}`)
   }
}
