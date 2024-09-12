import { Component } from '@angular/core';
import { SpoonApiService } from '../../../../services/spoon-api.service';
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
      private spoonApi: SpoonApiService,
   ) {
      this.ingredients$ = this.ingredientsService.ingredients$;
   }

   handleUserInput() {
      this.ingredientsService.addIngredient(this.ingredientInput);
      this.ingredientInput = "";

      this.ingredients$.subscribe(ingredients => {
         const preparedIngredients = this.ingredientsService.prepareIngredientsForQuery(ingredients.map(ingredient => ingredient.text));

         this.spoonApi.searchRecipe(preparedIngredients).subscribe((recipes) => {
            this.spoonApi.recipes$.next(recipes)
         })
      });
   }
}
