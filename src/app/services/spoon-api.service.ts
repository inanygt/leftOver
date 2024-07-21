import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpoonApiService {

  constructor(private http: HttpClient) {}

  apiUrl = "https://api.spoonacular.com/recipes/findByIngredients?apiKey=f7b667c5b33b40dcbb0f44cd03ab8b67&ingredients=";

  searchRecipe(ingredients: any): Observable<any> {
    return this.http.get(this.apiUrl + ingredients )
  }
}
