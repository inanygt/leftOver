import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
   selector: 'app-preferences-modal',
   templateUrl: './preferences-modal.component.html',
   styleUrl: './preferences-modal.component.scss'
})
export class PreferencesModalComponent {
   constructor(private fb: FormBuilder) { }

   preferencesForm = this.fb.group({
      dishType: ''
   })

   preferences: any;
   selected = 'option2';

   onSubmitPreferences() {
      console.log(this.preferencesForm.value)
   }
}
