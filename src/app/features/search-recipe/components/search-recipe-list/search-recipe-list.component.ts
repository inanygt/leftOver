import { Component } from "@angular/core";
import { RecipesService } from "../../../../core/services/recipes.service";
import {
  firestoreRecipe,
  RecipeResponse,
} from "../../../../core/types/recipe.interface";
import { map, Observable } from "rxjs";
import { AuthService } from "../../../../core/components/authentication/service/auth.service";
import { SnackBarService } from "../../../../core/components/authentication/service/snackbar.service";
import { FirebaseStoreService } from "../../../../core/components/authentication/service/firebase-store.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-search-recipe-list",
  templateUrl: "./search-recipe-list.component.html",
  styleUrl: "./search-recipe-list.component.scss",
})
export class SearchRecipeListComponent {
  recipesResponse$: Observable<RecipeResponse>;
  recipes$: Observable<any>;
  totalResult$: Observable<number>;

  recipe: any;
  isLoggedIn: Observable<boolean>;

  constructor(
    private recipesService: RecipesService,
    private authService: AuthService,
    private snackbar: SnackBarService,
    private firestore: FirebaseStoreService,
    private router: Router
  ) {
    this.recipesResponse$ = this.recipesService.recipes$;
    this.recipes$ = this.recipesResponse$.pipe(
      map((response) => response?.results)
    );
    this.totalResult$ = this.recipes$.pipe(map((response) => response?.length));
    this.isLoggedIn = this.authService.isLoggedIn();
  }

  saveRecipe(
    id: string,
    title: string,
    image: string,
    time: string,
    healthScore: string
  ) {
    this.authService.isLoggedIn().subscribe({
      next: (isLoggedIn: boolean) => {
        if (isLoggedIn) {
          this.authService.user$.subscribe((user) => {
            const newRecipe: firestoreRecipe = {
              id: id.toString(),
              name: title,
              UID: user.uid,
              image: image,
              time: time,
              healthScore: healthScore,
            };
            this.snackbar.showMessage("Recipe saved!", "🍎");
            this.firestore.saveRecipe(newRecipe);
          });
        } else {
          this.snackbar.showMessage("you are not logged in");
          this.router.navigate(["/login"]);
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
