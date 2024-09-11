import { AfterViewInit, Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { SpoonApiService } from '../../../../services/spoon-api.service';
import { MatDialog } from '@angular/material/dialog';
import { PreferencesModalComponent } from '../preferences-modal/preferences-modal.component';
import { IngredientsService } from '../../services/ingredients.service';
import { IngredientInterface } from '../../../../core/types/ingredient.interface';

@Component({
   selector: 'app-search-recipe',
   templateUrl: './search-recipe.component.html',
   styleUrl: './search-recipe.component.scss'
})
export class SearchRecipeComponent implements AfterViewInit {
   ingredients: IngredientInterface[] = [];
   ingredientInput: string;
   recipes: any[] = [];

   @Output() recipesChanged = new EventEmitter<any[]>();
   @Output() ingredientsChanged = new EventEmitter<any[]>();

   @ViewChild('ingredientRef', { static: false }) ingredientElementRef: ElementRef;

   constructor(
      private ingredientsService: IngredientsService,
      private spoonApi: SpoonApiService,
      private dialog: MatDialog
   ) {

   }

   handleUserInput() {
      this.ingredientsService.addIngredient(this.ingredientInput);
      this.ingredients = this.ingredientsService.getAllIngredients();
      this.ingredientsChanged.emit(this.ingredients);
      this.ingredientInput = "";

      // const preparedIngredients = this.prepareForApi(this.ingredients);

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

   selectedPreferences: any;

   openPreferences(): void {
      const dialogRef = this.dialog.open(PreferencesModalComponent, {
         width: '100vw',
         height: '100vh',
         maxWidth: '100vw',
         maxHeight: '100vh'
      });

      dialogRef.afterClosed().subscribe(result => {
         console.log('The dialog was closed');
         console.log('Selected Meal Type:', result);

      });
   }

   ngAfterViewInit(): void {
      this.ingredientElementRef.nativeElement.focus();
   }
}
