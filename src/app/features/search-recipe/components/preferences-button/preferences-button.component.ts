import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PreferencesModalComponent } from '../preferences-modal/preferences-modal.component';

@Component({
   selector: 'app-preferences-button',
   templateUrl: './preferences-button.component.html',
   styleUrl: './preferences-button.component.scss'
})
export class PreferencesButtonComponent {

   constructor(
      private dialog: MatDialog
   ) { }

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
}
