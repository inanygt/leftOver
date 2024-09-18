import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DietType } from '../../../../core/types/dietType.enum';
import { IntoleranceType } from '../../../../core/types/intoleranceType.enum';

@Component({
   selector: 'app-preferences-modal',
   templateUrl: './preferences-modal.component.html',
   styleUrl: './preferences-modal.component.scss'
})
export class PreferencesModalComponent {

   preferencesForm: FormGroup
   constructor() {
      this.preferencesForm = new FormGroup({
         dietType: new FormControl([]),
         intoleranceType: new FormControl([])
      })
   }

   selectedDiet: number;

   diets = [
      { id: 1, name: DietType.ALL },
      { id: 2, name: DietType.VEGETARIAN },
      { id: 3, name: DietType.VEGAN },
      { id: 4, name: DietType.KETOGENIC },
      { id: 5, name: DietType.PALEO },
   ];

   intolerances = [
      { id: 1, name: IntoleranceType.DAIRY },
      { id: 2, name: IntoleranceType.EGG },
      { id: 3, name: IntoleranceType.GLUTEN },
      { id: 4, name: IntoleranceType.GRAIN },
   ];

   onSubmit() {
      console.log(this.preferencesForm);
   }
}
