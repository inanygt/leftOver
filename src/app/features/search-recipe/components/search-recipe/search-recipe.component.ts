import { Component, inject, signal } from '@angular/core';
import { RecipesService } from '../../../../core/services/recipes.service';
import { IngredientsService } from '../../services/ingredients.service';
import { Observable } from 'rxjs';
import { IngredientInterface } from '../../../../core/types/ingredient.interface';
import { FormControl } from '@angular/forms';
import { DietType } from '../../../../core/types/dietType.enum';
import { MatDialog } from '@angular/material/dialog';
import { PreferencesModalComponent } from '../preferences-modal/preferences-modal.component';

@Component({
   selector: 'app-search-recipe',
   templateUrl: './search-recipe.component.html',
   styleUrl: './search-recipe.component.scss'
})
export class SearchRecipeComponent {
   readonly formControl = new FormControl(['ingredients']);
   ingredientInput: string;
   ingredients$: Observable<IngredientInterface[]>;

   constructor(
      private ingredientsService: IngredientsService,
      private recipesService: RecipesService,
      private dialog: MatDialog
   ) {
      this.ingredients$ = this.ingredientsService.ingredients$;
   }

   handleUserInput() {
      if (this.ingredientInput.length !== 0) {
         this.ingredientsService.addIngredient(this.ingredientInput);
      }
      this.ingredientInput = "";
      this.ingredients$.subscribe((ingredients) => {
         const preparedIngredients = ingredients.map(ingredient => ingredient.text).join(',');

         this.recipesService.searchRecipe(preparedIngredients).subscribe((recipes) => {
            this.recipesService.recipes$.next(recipes.results)
         })
      })
   }

   deleteIngredient(ingredient: string) {
      this.ingredientsService.deleteIngredient(ingredient);
   }

   openDialog() {
      const dialogRef = this.dialog.open(PreferencesModalComponent, {
         height: "calc(100% - 30px)",
         width: "calc(100% - 30px)",
         maxWidth: "100%",
         maxHeight: "100%"
      });

      dialogRef.afterClosed().subscribe(result => {
         // console.log(`Dialog result: ${result}`);
      });
   }

}
