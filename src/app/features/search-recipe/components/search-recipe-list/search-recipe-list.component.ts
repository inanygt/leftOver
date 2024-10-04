import { Component, OnInit } from "@angular/core";
import { RecipesService } from "../../../../core/services/recipes.service";
import {
  firestoreRecipe,
  RecipeResponse,
} from "../../../../core/types/recipe.interface";
import { BehaviorSubject, finalize, map, Observable, tap } from "rxjs";
import { AuthService } from "../../../../core/components/authentication/service/auth.service";
import { SnackBarService } from "../../../../core/components/authentication/service/snackbar.service";
import { FirebaseStoreService } from "../../../../core/components/authentication/service/firebase-store.service";
import { Router } from "@angular/router";
import { LoadingService } from "../../../../shared/services/loading.service";

@Component({
  selector: "app-search-recipe-list",
  templateUrl: "./search-recipe-list.component.html",
  styleUrl: "./search-recipe-list.component.scss",
})
export class SearchRecipeListComponent implements OnInit {
  isLoading$: Observable<boolean>;
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
    private router: Router,
    public loadingService: LoadingService
  ) {
    this.isLoading$ = this.loadingService.isLoading$;
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

  ngOnInit(): void {}
}
