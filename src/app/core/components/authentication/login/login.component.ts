import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
   selector: 'app-login',
   templateUrl: './login.component.html',
   styleUrl: './login.component.scss'
})
export class LoginComponent {

   // loginDisabled: boolean;

   form: FormGroup;

   constructor(
      private fb: FormBuilder,
      private authService: AuthService,
      private router: Router,
      private snackBar: MatSnackBar
   ) {
      this.form = this.fb.nonNullable.group({
         email: ['', Validators.required, Validators.email],
         password: ['', Validators.required]
      })
   }



   get emailFormControl() {
      return this.form.get('email');
   }

   logout() {
      this.authService.logout();
   }

   recoverPassword() {
      this.authService.recoverPassword(
         this.form.value.email
      ).subscribe({
         next: () => {
            this.snackBar.open("You can recover your password in your email account.", "OK", {
               duration: 5000
            });
         },
         error: error => {
            this.snackBar.open(error.message, "OK", {
               duration: 5000
            });
         }
      })
   }

   onSubmit(): void {
      this.authService.login(
         this.form.value.email,
         this.form.value.password
      ).subscribe(() => {
         this.router.navigate(['']);
      }, (error) => {
         console.log('not logged in')
      })
   }
}
