import { Component, Input } from '@angular/core';
import { IngredientService } from '../../../../services/ingredients/ingredient.service';

@Component({
   selector: 'app-added-ingredients',
   templateUrl: './added-ingredients.component.html',
   styleUrl: './added-ingredients.component.scss'
})
export class AddedIngredientsComponent {
   // ingredients: string[] = [];

   @Input() ingredients: any[];


   constructor(
      private ingredientService: IngredientService,
   ) { }


   deleteIngredient(ingredient: string) {
      this.ingredientService.deleteIngredient(ingredient);
      this.ingredients = this.ingredientService.getAllIngredients();
   }

   removeAllIngredients() {
      this.ingredients = this.ingredientService.deleteAllIngredients();
   }
}
