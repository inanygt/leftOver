import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { firestoreRecipe } from '../../../../core/types/recipe.interface';
import { AuthService } from '../../../../core/components/authentication/service/auth.service';
import { FirebaseStoreService } from '../../../../core/components/authentication/service/firebase-store.service';

@Component({
   selector: 'app-search-recipe-card',
   templateUrl: './search-recipe-card.component.html',
   styleUrl: './search-recipe-card.component.scss'
})
export class SearchRecipeCardComponent {
   @Input() recipe: any;

   constructor(
      private router: Router,
      private authService: AuthService,
      private firestore: FirebaseStoreService
   ) { }

   saveRecipe(id: string, title: string) {
      event.stopPropagation();


      this.authService.user$.subscribe(user => {
         console.log(user);
         const newRecipe: firestoreRecipe = {
            id: id,
            name: title,
            UID: user.uid
         }
         console.log(newRecipe)

         this.firestore.saveRecipe(newRecipe)

      })



   }
}
