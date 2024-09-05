import { Component, Input } from '@angular/core';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrl: './app.component.scss'
})
export class AppComponent {
   title = 'leftOver';
   ingredients: string[] = [];
   recipes: any[] = [];


   handleRecipesChanged(recipes: any[]) {
      this.recipes = recipes;
   }

   handleIngredientsChanges(ingredients: any[]) {
      this.ingredients = ingredients;
   }
}
