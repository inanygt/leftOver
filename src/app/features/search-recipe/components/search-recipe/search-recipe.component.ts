import { Component, EventEmitter, Output } from '@angular/core';
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
   recipes: any[] = [];


   @Output() recipesChanged = new EventEmitter<any[]>();

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
         const preparedIngredients = this.prepareForApi(ingredients.map(ingredient => ingredient.text));

         this.spoonApi.searchRecipe(preparedIngredients).subscribe(res => {
            this.recipes = res;
            this.recipesChanged.emit(this.recipes);
         });
      });
   }

   prepareForApi(ingredients: string[]): string {
      // if (ingredients.length === 0) return "";
      let preparedIngredients = ingredients[0];
      for (let i = 1; i < ingredients.length; i++) {
         preparedIngredients += `,+${ingredients[i]}`;
      }
      return preparedIngredients;
   }
}
