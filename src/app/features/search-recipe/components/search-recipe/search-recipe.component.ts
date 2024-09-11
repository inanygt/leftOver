import { Component, EventEmitter, Output } from '@angular/core';
import { SpoonApiService } from '../../../../services/spoon-api.service';
import { IngredientsService } from '../../services/ingredients.service';

@Component({
   selector: 'app-search-recipe',
   templateUrl: './search-recipe.component.html',
   styleUrl: './search-recipe.component.scss'
})
export class SearchRecipeComponent {
   ingredientInput: string;

   @Output() recipesChanged = new EventEmitter<any[]>();

   constructor(
      private ingredientsService: IngredientsService,
      private spoonApi: SpoonApiService,
   ) { }

   handleUserInput() {
      this.ingredientsService.addIngredient(this.ingredientInput);
      this.ingredientInput = "";

      // const preparedIngredients = this.prepareForApi(this.ingredients$);

      // this.spoonApi.searchRecipe(preparedIngredients).subscribe(res => {
      //    this.recipes = res;
      //    this.recipesChanged.emit(this.recipes);
      // })
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
