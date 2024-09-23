import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DietType } from '../../../../core/types/dietType.enum';
import { IntoleranceType } from '../../../../core/types/intoleranceType.enum';
import { RecipesService } from '../../../../core/services/recipes.service';
import { IngredientsService } from '../../services/ingredients.service';
import { RecipeTimesType } from '../../../../core/types/recipeTimes.enum';

@Component({
   selector: 'app-preferences-modal',
   templateUrl: './preferences-modal.component.html',
   styleUrl: './preferences-modal.component.scss'
})
export class PreferencesModalComponent {

   preferencesForm: FormGroup

   constructor(
      private recipesService: RecipesService,
   ) {
      this.preferencesForm = new FormGroup({
         dietType: new FormControl(this.recipesService.selectedDiet$.getValue()),
         intoleranceType: new FormControl(this.recipesService.selectedIntolerances$.getValue()),
         recipeTime: new FormControl(),
      })
   }

   onDietChange($event) {
      this.recipesService.selectedDiet$.next($event.name);
   }

   onIntolerancesChange($event) {
      const intolerances = $event.map((intolerance) => intolerance.name);
      this.recipesService.selectedIntolerances$.next(intolerances);
   }

   onRecipeTimeChange($event) {
      this.recipesService.selectedTimeOption$.next($event.name);
   }

   diets = [
      { name: DietType.ALL },
      { name: DietType.VEGETARIAN },
      { name: DietType.VEGAN },
      { name: DietType.KETOGENIC },
      { name: DietType.PALEO },
   ];

   intolerances = [
      { name: IntoleranceType.DAIRY },
      { name: IntoleranceType.EGG },
      { name: IntoleranceType.GLUTEN },
      { name: IntoleranceType.GRAIN },
   ];

   recipeTimes = [
      { name: RecipeTimesType.UNDER_15_MIN },
      { name: RecipeTimesType.UNDER_30_MIN },
      { name: RecipeTimesType.UNDER_60_MIN },
   ];

   onSubmit() {
      this.recipesService.searchRecipe().subscribe((recipes) => {
         this.recipesService.recipes$.next(recipes.results);
      });
   }
}
