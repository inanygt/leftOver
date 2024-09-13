import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
   selector: 'app-register',
   templateUrl: './register.component.html',
   styleUrl: './register.component.scss'
})
export class RegisterComponent {
   constructor(
      private fb: FormBuilder,
      private auth: AuthService,
      private router: Router
   ) { }

   form = this.fb.nonNullable.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
   })

   errorMessage: string | null = null;

   onSubmit(): void {
      this.auth.register(this.form.value.email, this.form.value.email).subscribe({
         next: () => {
            this.router.navigate(['login']);
         },
         error: (error) => {
            this.errorMessage = error.message;
         }
      }
      )
   }
}
