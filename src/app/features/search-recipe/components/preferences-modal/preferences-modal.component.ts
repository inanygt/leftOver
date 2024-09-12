import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
   selector: 'app-preferences-modal',
   templateUrl: './preferences-modal.component.html',
   styleUrl: './preferences-modal.component.scss'
})
export class PreferencesModalComponent {
   preferencesForm: FormGroup
   constructor() {
      this.preferencesForm = new FormGroup({
         mealType: new FormControl(''),
         mealTime: new FormControl('')

      })
   }
   onSubmit() {
      console.log(this.preferencesForm.value);
   }
}
