import { Component, OnInit } from '@angular/core';
import { IngredientInterface } from '../../../../core/types/ingredient.interface';

@Component({
   selector: 'app-search',
   templateUrl: './search.component.html',
   styleUrl: './search.component.scss'
})
export class SearchComponent {
   title = 'leftOver';
   ingredients: string[] = [];
   recipes$: any[] = [];

   handleRecipesChanged(recipes: any[]) {
      this.recipes$ = recipes;
   }

   handleIngredientsChanges(ingredients: any[]) {
      this.ingredients = ingredients;
   }
}
