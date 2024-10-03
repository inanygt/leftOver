import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of } from "rxjs";
import { IngredientInterface } from "../../../core/types/ingredient.interface";
import { generateUniqueId } from "../../../core/helpers/utils";
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "../../../environment/environment";

@Injectable()
export class IngredientsService {
  autoIngredientUrl =
    "https://api.spoonacular.com/food/ingredients/autocomplete";

  ingredients$ = new BehaviorSubject<IngredientInterface[]>([]);

  constructor(private http: HttpClient) {}

  autocompleteIngredient(ingredient: string): Observable<any[]> {
    // let params = new HttpParams()
    //   .set("query", ingredient)
    //   .set("number", "10")
    //   .set("apiKey", environment.apiKey);
    // return this.http.get<any[]>(this.autoIngredientUrl, { params });

    // for development purposes to not exceed the 150 api call limit
    return of([]);
  }

  addIngredient(ingredient: string) {
    const newIngredient: IngredientInterface = {
      id: generateUniqueId(),
      text: ingredient,
    };
    const updatedIngredients = [...this.ingredients$.getValue(), newIngredient];
    this.ingredients$.next(updatedIngredients);
  }

  deleteIngredient(id: string) {
    const updatedIngredients = this.ingredients$
      .getValue()
      .filter((ingredient) => ingredient.id !== id);
    this.ingredients$.next(updatedIngredients);
  }
}
