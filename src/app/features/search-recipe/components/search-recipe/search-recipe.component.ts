import { AfterViewInit, Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { IngredientService } from '../../../../services/ingredients/ingredient.service';
import { SpoonApiService } from '../../../../services/spoon-api.service';
import { MatDialog } from '@angular/material/dialog';
import { PreferencesModalComponent } from '../preferences-modal/preferences-modal.component';

@Component({
   selector: 'app-search-recipe',
   templateUrl: './search-recipe.component.html',
   styleUrl: './search-recipe.component.scss'
})
export class SearchRecipeComponent implements AfterViewInit {
   ingredients: string[] = [];
   userInput: string;
   recipes: any[] = [];

   @Output() recipesChanged = new EventEmitter<any[]>();
   @Output() ingredientsChanged = new EventEmitter<any[]>();

   @ViewChild('ingredientRef', { static: false }) ingredientElementRef: ElementRef;

   constructor(
      private ingredientService: IngredientService,
      private spoonApi: SpoonApiService,
      private dialog: MatDialog
   ) { }

   handleUserInput() {
      this.ingredientService.addIngredient(this.userInput);
      this.ingredients = this.ingredientService.getAllIngredients();
      this.ingredientsChanged.emit(this.ingredients);
      this.userInput = "";

      const preparedIngredients = this.prepareForApi(this.ingredients);

      this.spoonApi.searchRecipe(preparedIngredients).subscribe(res => {
         this.recipes = res;
         this.recipesChanged.emit(this.recipes);
      })
   }

   prepareForApi(ingredients: string[]): string {
      // if (ingredients.length === 0) return "";
      let preparedIngredients = ingredients[0];
      for (let i = 1; i < ingredients.length; i++) {
         preparedIngredients += `,+${ingredients[i]}`;
      }
      return preparedIngredients;
   }

   openPreferences(): void {
      this.dialog.open(PreferencesModalComponent, {
         width: '400px', // Adjust the width of the modal
         disableClose: true // Optional: prevent closing by clicking outside the modal
      });
   }

   ngAfterViewInit(): void {
      this.ingredientElementRef.nativeElement.focus();
   }
}