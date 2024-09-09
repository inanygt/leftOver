import { Component } from '@angular/core';

@Component({
   selector: 'app-search',
   templateUrl: './search.component.html',
   styleUrl: './search.component.scss'
})
export class SearchComponent {
   title = 'leftOver';
   ingredients: string[] = [];
   recipes: any[] = [];

   handleRecipesChanged(recipes: any[]) {
      this.recipes = recipes;
      console.log(this.recipes)
   }

   handleIngredientsChanges(ingredients: any[]) {
      this.ingredients = ingredients;
   }
}
