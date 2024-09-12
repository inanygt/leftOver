import { Component, EventEmitter, Output } from '@angular/core';
import { SpoonApiService } from '../../../../services/spoon-api.service';
import { IngredientsService } from '../../services/ingredients.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { IngredientInterface } from '../../../../core/types/ingredient.interface';

@Component({
   selector: 'app-search-recipe',
   templateUrl: './search-recipe.component.html',
   styleUrl: './search-recipe.component.scss'
})
export class SearchRecipeComponent {
   ingredientInput: string;
   ingredients$: Observable<IngredientInterface[]>;
   // recipes$: Observable<any>;


   // @Output() recipesChanged = new EventEmitter<any[]>();

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
            // this.recipesChanged.emit(recipes);
         })
      });
   }
}
