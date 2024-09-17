import { Component, inject, signal } from '@angular/core';
import { RecipesService } from '../../../../core/services/recipes.service';
import { IngredientsService } from '../../services/ingredients.service';
import { Observable } from 'rxjs';
import { IngredientInterface } from '../../../../core/types/ingredient.interface';
import { FormControl } from '@angular/forms';
import { DietType } from '../../../../core/types/dietType.enum';

@Component({
   selector: 'app-search-recipe',
   templateUrl: './search-recipe.component.html',
   styleUrl: './search-recipe.component.scss'
})
export class SearchRecipeComponent {
   readonly formControl = new FormControl(['ingredients']);
   ingredientInput: string;
   ingredients$: Observable<IngredientInterface[]>;

   selectedDietType: DietType = DietType.ALL;
   DietType = DietType;
   dietOutput: string = DietType.DIET;

   constructor(
      private ingredientsService: IngredientsService,
      private recipesService: RecipesService,
   ) {
      this.ingredients$ = this.ingredientsService.ingredients$;
   }

   handleUserInput() {

      if (this.ingredientInput.length !== 0) {
         this.ingredientsService.addIngredient(this.ingredientInput);
      }

      this.ingredientInput = "";

      this.ingredients$.subscribe(ingredients => {
         const preparedIngredients = this.ingredientsService.prepareIngredientsForQuery(ingredients.map(ingredient => ingredient.text));

         this.recipesService.searchRecipe(preparedIngredients, this.selectedDietType).subscribe((recipes) => {
            this.recipesService.recipes$.next(recipes.results)
         })
      });
   }

   deleteIngredient(ingredient: string) {
      this.ingredientsService.deleteIngredient(ingredient);
   }

   selectDietType(dietType: DietType) {
      this.selectedDietType = dietType;
      this.selectDietOutput(dietType);
      this.handleUserInput();
   }

   selectDietOutput(dietType: DietType) {
      switch (dietType) {
         case DietType.ALL:
            this.dietOutput = DietType.DIET;
            break;
         case DietType.VEGETARIAN:
            this.dietOutput = DietType.VEGETARIAN;
            break;
         case DietType.VEGAN:
            this.dietOutput = DietType.VEGAN;
            break;
         case DietType.PALEO:
            this.dietOutput = DietType.PALEO;
            break;
         case DietType.KETOGENIC:
            this.dietOutput = DietType.KETOGENIC;
            break;
      }
   }
}
