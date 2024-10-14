import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of, tap } from "rxjs";
import { IngredientInterface } from "../../../core/types/ingredient.interface";
import { UtilsService } from "../../../core/helpers/utils";
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "../../../environment/environment";

@Injectable()
export class IngredientsService {
  autoIngredientUrl =
    "https://api.spoonacular.com/food/ingredients/autocomplete";
  ingredientInfo = "https://api.spoonacular.com/food/ingredients/";

  ingredients$ = new BehaviorSubject<IngredientInterface[]>([]);
  suggestingIngredient$ = new BehaviorSubject<string>("");

  constructor(private http: HttpClient, private utilsService: UtilsService) {}

  addIngredient(ingredient: string) {
    const newIngredient: IngredientInterface = {
      id: this.utilsService.generateUniqueId(),
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

  // Costs too much api calls for now
  getIngredientInformation(id: string) {
    let params = new HttpParams()
      .set("apiKey", environment.apiKey)
      .set("amount", "1");
    let url = `${this.ingredientInfo + id}/information`;

    return this.http.get<any>(url, { params });
  }

  autocompleteIngredient(ingredient: string): Observable<any[]> {
    let params = new HttpParams()
      .set("query", ingredient)
      .set("number", "10")
      .set("metaInformation", true)
      .set("apiKey", environment.apiKey);
    return this.http.get<any[]>(this.autoIngredientUrl, { params });

    // for development purposes to not exceed the 150 api call limit
    // return of([]);
  }
}
