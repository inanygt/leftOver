import { Component, OnInit } from '@angular/core';
import { SortRecipeType } from '../../../../core/types/sort-recipe.enum';
import { RecipesService } from '../../../../core/services/recipes.service';
import { MatDialog } from '@angular/material/dialog';
import { PreferencesModalComponent } from '../preferences-modal/preferences-modal.component';
import { Observable } from 'rxjs';
import { IngredientInterface } from '../../../../core/types/ingredient.interface';
import { IngredientsService } from '../../services/ingredients.service';

@Component({
   selector: 'app-preferences',
   templateUrl: './preferences.component.html',
   styleUrl: './preferences.component.scss'
})
export class PreferencesComponent {

   sortRecipeType = SortRecipeType;
   ingredients$: Observable<IngredientInterface[]>;
   selectedSortOption: SortRecipeType;

   constructor(
      private recipesService: RecipesService,
      private ingredientsService: IngredientsService,
      private dialog: MatDialog
   ) {
      this.ingredients$ = this.ingredientsService.ingredients$;
   }

   sortOptionChange(SortOption: SortRecipeType) {
      this.recipesService.selectedSortOption$.next(SortOption);
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
