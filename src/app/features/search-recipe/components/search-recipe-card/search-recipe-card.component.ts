import { Component, Input } from '@angular/core'
import { Router } from '@angular/router'
import { firestoreRecipe } from '../../../../core/types/recipe.interface'
import { AuthService } from '../../../../core/components/authentication/service/auth.service'
import { FirebaseStoreService } from '../../../../core/components/authentication/service/firebase-store.service'
import { Observable } from 'rxjs'
import { SnackBarService } from '../../../../core/components/authentication/service/snackbar.service'
import { ProgressSpinnerMode } from '@angular/material/progress-spinner'

@Component({
   selector: 'app-search-recipe-card',
   templateUrl: './search-recipe-card.component.html',
   styleUrl: './search-recipe-card.component.scss',
})
export class SearchRecipeCardComponent {
   @Input() recipe: any
   isLoggedIn: Observable<boolean>

   constructor(
      private router: Router,
      private authService: AuthService,
      private firestore: FirebaseStoreService,
      private snackbar: SnackBarService
   ) {
      this.isLoggedIn = this.authService.isLoggedIn()
   }

   saveRecipe(id: string, title: string, image: string) {
      this.authService.isLoggedIn().subscribe({
         next: (isLoggedIn: boolean) => {
            if (isLoggedIn) {
               this.authService.user$.subscribe((user) => {
                  const newRecipe: firestoreRecipe = {
                     id: id.toString(),
                     name: title,
                     UID: user.uid,
                     image: image,
                  }
                  this.snackbar.showMessage('Recipe saved!', '🍎')
                  this.firestore.saveRecipe(newRecipe)
               })
            } else {
               this.snackbar.showMessage('you are not logged in')
               this.router.navigate(['/login'])
            }
         },
         error: (err) => {
            console.log(err)
         },
      })
   }
}
