import { Component, Input } from '@angular/core';
import { IngredientsService } from '../../services/ingredients.service';
import { Observable } from 'rxjs';
import { IngredientInterface } from '../../../../core/types/ingredient.interface';

@Component({
   selector: 'app-ingredients',
   templateUrl: './ingredients.component.html',
   styleUrl: './ingredients.component.scss'
})
export class IngredientsComponent {

   ingredients$: Observable<IngredientInterface[]>;

   constructor(
      private ingredientsService: IngredientsService
   ) {
      this.ingredients$ = this.ingredientsService.ingredients$;
   }

   deleteIngredient(ingredient: string) {
      this.ingredientsService.deleteIngredient(ingredient);
   }

   removeAllIngredients() {
      this.ingredientsService.deleteAllIngredients();
   }
}
