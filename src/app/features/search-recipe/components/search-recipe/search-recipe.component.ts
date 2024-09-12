import { Component } from '@angular/core';
import { RecipesService } from '../../../../core/services/recipes.service';
import { IngredientsService } from '../../services/ingredients.service';
import { Observable } from 'rxjs';
import { IngredientInterface } from '../../../../core/types/ingredient.interface';

@Component({
   selector: 'app-search-recipe',
   templateUrl: './search-recipe.component.html',
   styleUrl: './search-recipe.component.scss'
})
export class SearchRecipeComponent {
   ingredientInput: string;
   ingredients$: Observable<IngredientInterface[]>;

   constructor(
      private ingredientsService: IngredientsService,
      private recipesService: RecipesService,
   ) {
      this.ingredients$ = this.ingredientsService.ingredients$;
   }

   handleUserInput() {
      this.ingredientsService.addIngredient(this.ingredientInput);
      this.ingredientInput = "";

      this.ingredients$.subscribe(ingredients => {
         const preparedIngredients = this.ingredientsService.prepareIngredientsForQuery(ingredients.map(ingredient => ingredient.text));

         this.recipesService.searchRecipe(preparedIngredients).subscribe((recipes) => {
            this.recipesService.recipes$.next(recipes)
         })
      });
   }
}
