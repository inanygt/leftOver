import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/components/authentication/service/auth.service';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
   title = 'leftOver';
   ingredients: string[] = [];
   recipes: any[] = [];

   isLoggedIn: boolean = false;

   showHeader: boolean = true;

   constructor(
      private auth: AuthService,
      private router: Router
   ) {
      this.router.events
         .pipe(filter(event => event instanceof NavigationEnd))
         .subscribe((event: any) => {
            // Hide header for the login route
            this.showHeader = event.url !== '/login';  // Adjust '/login' if your login route has a different path
         });
   }

   ngOnInit(): void {
      this.auth.isLoggedIn().subscribe(loggedIn => {
         this.isLoggedIn = loggedIn;
      })

   }
}
