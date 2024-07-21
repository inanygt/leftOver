import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient) {}
  private apiKey: string = `apiKey=f7b667c5b33b40dcbb0f44cd03ab8b67`;
  // public apiUrl: string = `https://api.spoonacular.com/recipes/complexSearch?${}`+ this.apiKey;

  public testUrl: string = 'https://api.spoonacular.com/recipes/complexSearch?query=pasta&maxFat=25&number=2&apiKey=f7b667c5b33b40dcbb0f44cd03ab8b67';

 searchRecipe(): Observable<any> {
    return this.http.get(this.testUrl);
  }

}
