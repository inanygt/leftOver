import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
   selector: 'app-login',
   templateUrl: './login.component.html',
   styleUrl: './login.component.scss'
})
export class LoginComponent {

   constructor(
      private fb: FormBuilder
   ) { }

   form = this.fb.nonNullable.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
   })

   logout() {
      console.log('logout')
   }

   onSubmit(): void {
      console.log('login')
   }
}
