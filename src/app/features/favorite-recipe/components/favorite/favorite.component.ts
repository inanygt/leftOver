import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../core/components/authentication/service/auth.service';
import { FirebaseStoreService } from '../../../../core/components/authentication/service/firebase-store.service';
import { firestoreRecipe } from '../../../../core/types/recipe.interface';

@Component({
   selector: 'app-favorite',
   templateUrl: './favorite.component.html',
   styleUrl: './favorite.component.scss'
})
export class FavoriteComponent implements OnInit {

   currentUserUid: string;
   favoriteRecipes: firestoreRecipe[];

   constructor(
      public authService: AuthService,
      public fireStore: FirebaseStoreService
   ) { }

   ngOnInit(): void {
      this.authService.user$.subscribe(user => {
         this.fireStore.getRecipesByUid(user.id)
            .subscribe(
               (recipes) => {
                  recipes.filter(recipe => {
                     recipe.UID = user.id
                     this.favoriteRecipes = recipes;
                  })
               }
            )
      })
   }
}