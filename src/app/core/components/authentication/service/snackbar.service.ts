import { inject, Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: "root",
})
export class SnackBarService {
  snackbar = inject(MatSnackBar);

  showMessage(message: string, action: string = "", duration: number = 4000) {
    this.snackbar.open(message, action, {
      duration: duration,
    });
  }
}
