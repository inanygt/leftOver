import { inject } from "@angular/core"
import { AuthService } from "../components/authentication/service/auth.service"
import { Router } from "@angular/router"
import { map, take } from "rxjs"
import { SnackBarService } from "../components/authentication/service/snackbar.service"

export const CanActive = () => {
   const authService = inject(AuthService)
   const router = inject(Router)
   const snackbarService = inject(SnackBarService)

   return authService.isLoggedIn().pipe(
      take(1),
      map(isLoggedIn => {
         if (isLoggedIn) {
            return true;
         } else {
            snackbarService.showMessage('You are not logged in', '🍽️', 3000)
            return false;
         }
      })
   )
}
