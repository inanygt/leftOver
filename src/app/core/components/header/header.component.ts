import { Component, OnInit } from '@angular/core';
import { AuthService } from '../authentication/service/auth.service';
import { Observable } from 'rxjs';

@Component({
   selector: 'app-header',
   templateUrl: './header.component.html',
   styleUrl: './header.component.scss'
})
export class HeaderComponent {
   isLoggedIn: Observable<boolean>;


   constructor(
      public authService: AuthService
   ) {
      this.isLoggedIn = this.authService.isLoggedIn()
   }

   logout() {
      this.authService.logout();
   }
}
