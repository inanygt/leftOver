import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { IngredientInterface } from "../../../core/types/ingredient.interface";
import { generateUniqueId } from "../../../core/helpers/utils";

@Injectable()
export class IngredientsService {
   ingredients$ = new BehaviorSubject<IngredientInterface[]>([]);

   addIngredient(ingredient: string) {
      const newIngredient: IngredientInterface = {
         id: generateUniqueId(),
         text: ingredient,
      }
      const updatedIngredients = [...this.ingredients$.getValue(), newIngredient]
      this.ingredients$.next(updatedIngredients);
   }

   getAllIngredients(): IngredientInterface[] {
      return [];
   }

   deleteIngredient(ingredient: string) { }

   deleteAllIngredients() { }
}
