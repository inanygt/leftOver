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

   deleteIngredient(ingredientId: string) {
      const updatedIngredients = this.ingredients$.getValue().filter(ingredient => ingredient.id !== ingredientId);
      this.ingredients$.next(updatedIngredients);
   }

   prepareIngredientsForQuery(ingredients: string[]): string {
      let preparedIngredients = ingredients[0];
      for (let i = 1; i < ingredients.length; i++) {
         preparedIngredients += `,+${ingredients[i]}`;
      }
      return preparedIngredients;
   }
}
