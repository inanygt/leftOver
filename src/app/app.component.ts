import { Component } from '@angular/core';
import { IngredientService } from './services/ingredients/ingredient.service';

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
    this.recipes = recipes; // Update the recipes in the parent component
  }

  constructor(
    private ingredientService: IngredientService,
  ) {}


  deleteIngredient(ingredient: string) {
    this.ingredientService.deleteIngredient(ingredient);
    this.ingredients = this.ingredientService.getAllIngredients();
  }

  removeAllIngredients() {
    this.ingredients = this.ingredientService.deleteAllIngredients();
  }

}
