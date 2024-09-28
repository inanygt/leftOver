import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
   providedIn: 'root'
})

export class SnackBarService {
   constructor(
      private snackBar: MatSnackBar
   ) { }

   showMessage(message: string, action: string = '', duration: number = 4000) {
      this.snackBar.open(message, action, {
         duration: duration
      })
   }
}
