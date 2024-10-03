import { Component } from "@angular/core";
import { AuthService } from "../../../../core/components/authentication/service/auth.service";
import { FirebaseStoreService } from "../../../../core/components/authentication/service/firebase-store.service";
import { map, Observable, switchMap } from "rxjs";
import { firestoreRecipe } from "../../../../core/types/recipe.interface";

@Component({
  selector: "app-favorite",
  templateUrl: "./favorite.component.html",
  styleUrl: "./favorite.component.scss",
})
export class FavoriteComponent {
  currentUserUid$: Observable<string>;
  favoriteRecipes$: Observable<firestoreRecipe[]>;

  constructor(
    public authService: AuthService,
    public fireStore: FirebaseStoreService
  ) {
    this.currentUserUid$ = this.authService.user$.pipe(map((user) => user.uid));
    this.favoriteRecipes$ = this.currentUserUid$.pipe(
      switchMap((uid) => this.fireStore.getRecipesByUid(uid))
    );
  }

  deleteRecipe(id: string) {
    this.fireStore.onDeleteRecipe(id);
  }
}
