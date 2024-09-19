import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DietType } from '../../../../core/types/dietType.enum';
import { IntoleranceType } from '../../../../core/types/intoleranceType.enum';
import { RecipesService } from '../../../../core/services/recipes.service';
import { IngredientsService } from '../../services/ingredients.service';

@Component({
   selector: 'app-preferences-modal',
   templateUrl: './preferences-modal.component.html',
   styleUrl: './preferences-modal.component.scss'
})
export class PreferencesModalComponent {

   preferencesForm: FormGroup

   constructor(
      private recipesService: RecipesService,
      private ingredientsService: IngredientsService
   ) {
      this.preferencesForm = new FormGroup({
         mealTime: new FormControl(),
         dietType: new FormControl(),
         intoleranceType: new FormControl([]),
      })
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

   mealTimes = [
      { name: 'Under 15 min' },
      { name: 'Under 30 min' },
      { name: 'Under 60 min' }
   ]

   onSubmit() {
      const dietType = this.preferencesForm.value.dietType
      const ingredients = this.ingredientsService.preparedIngredients$.getValue();

      this.recipesService.searchRecipe(ingredients, dietType).subscribe((recipes) => {
         this.recipesService.recipes$.next(recipes.results);
      });
   }
}
