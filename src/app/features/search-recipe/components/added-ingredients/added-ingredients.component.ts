import { Component, Input } from '@angular/core';
import { IngredientsService } from '../../services/ingredients.service';
import { Observable } from 'rxjs';
import { IngredientInterface } from '../../../../core/types/ingredient.interface';

@Component({
   selector: 'app-added-ingredients',
   templateUrl: './added-ingredients.component.html',
   styleUrl: './added-ingredients.component.scss'
})
export class AddedIngredientsComponent {

   // @Input() ingredients: any[];
   ingredients$: Observable<IngredientInterface[]>;

   constructor(
      private ingredientsService: IngredientsService
   ) {
      this.ingredients$ = this.ingredientsService.ingredients$;
      console.log(this.ingredients$)
   }


   // deleteIngredient(ingredient: string) {
   //    this.ingredientsService.deleteIngredient(ingredient);
   //    // this.ingredients = this.ingredientsService.getAllIngredients();
   // }

   removeAllIngredients() {
      // this.ingredients = this.ingredientsService.deleteAllIngredients();
   }
}
