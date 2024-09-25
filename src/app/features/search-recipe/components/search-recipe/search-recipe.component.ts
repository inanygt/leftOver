import { Component } from '@angular/core';
import { RecipesService } from '../../../../core/services/recipes.service';
import { IngredientsService } from '../../services/ingredients.service';
import { Observable } from 'rxjs';
import { IngredientInterface } from '../../../../core/types/ingredient.interface';
import { FormControl } from '@angular/forms';

@Component({
   selector: 'app-search-recipe',
   templateUrl: './search-recipe.component.html',
   styleUrl: './search-recipe.component.scss'
})
export class SearchRecipeComponent {
   readonly formControl = new FormControl(['ingredients']);

   ingredientInput: string;
   ingredients$: Observable<IngredientInterface[]>;
   suggestedIngredients$: Observable<any[]>;

   constructor(
      private ingredientsService: IngredientsService,
      private recipesService: RecipesService,
   ) {
      this.ingredients$ = this.ingredientsService.ingredients$;
   }

   onChangeIngredient(event: string) {
      console.log(event);
      this.suggestedIngredients$ = this.ingredientsService.autocompleteIngredient(event)
   }

   handleUserInput() {
      if (this.ingredientInput.length !== 0) {
         this.ingredientsService.addIngredient(this.ingredientInput);
      }
      this.ingredientInput = "";

      this.recipesService.searchRecipe().subscribe((response) => {
         this.recipesService.totalResultsRecipes$.next(response.totalResults);
         this.recipesService.recipes$.next(response)
      })
   }

   deleteIngredient(ingredient: string) {
      this.ingredientsService.deleteIngredient(ingredient);
   }

   selectSuggestedIngredient(ingredient = { name: '', image: '' }) {
      console.log(ingredient.name)
      this.ingredientInput = ingredient.name
      this.handleUserInput();

   }
}
