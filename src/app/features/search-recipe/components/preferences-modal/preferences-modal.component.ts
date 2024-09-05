import { Component } from '@angular/core';

@Component({
   selector: 'app-preferences-modal',
   templateUrl: './preferences-modal.component.html',
   styleUrl: './preferences-modal.component.scss'
})
export class PreferencesModalComponent {
   preferences: any;
   selected = 'option2';

}
