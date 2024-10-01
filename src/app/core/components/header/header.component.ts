import { Component, OnInit } from '@angular/core'
import { AuthService } from '../authentication/service/auth.service'
import { Observable } from 'rxjs'
import { SnackBarService } from '../authentication/service/snackbar.service'

@Component({
   selector: 'app-header',
   templateUrl: './header.component.html',
   styleUrl: './header.component.scss',
})
export class HeaderComponent {
   isLoggedIn: Observable<boolean>

   constructor(
      public authService: AuthService,
      private snackbar: SnackBarService
   ) {
      this.isLoggedIn = this.authService.isLoggedIn()
   }

   logout() {
      this.snackbar.showMessage('You are logged out', '😞')
      this.authService.logout()
   }

   reload() {
      window.location.reload()
   }
}
