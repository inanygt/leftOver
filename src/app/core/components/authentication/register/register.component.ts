import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
   selector: 'app-register',
   templateUrl: './register.component.html',
   styleUrl: './register.component.scss'
})
export class RegisterComponent {
   constructor(
      private fb: FormBuilder
   ) { }

   form = this.fb.nonNullable.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
   })

   onSubmit(): void {
      console.log('register')
   }
}
