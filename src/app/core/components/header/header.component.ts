import { Component, OnInit } from "@angular/core";
import { AuthService } from "../authentication/service/auth.service";
import { Observable } from "rxjs";
import { SnackBarService } from "../authentication/service/snackbar.service";
import { LocalStorageService } from "../../services/local-storage";
import { Router } from "@angular/router";
import { IngredientsService } from "../../../features/search-recipe/services/ingredients.service";
import { RecipesService } from "../../services/recipes.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.scss",
})
export class HeaderComponent {
  isLoggedIn: Observable<boolean>;

  constructor(
    public authService: AuthService,
    private snackbar: SnackBarService,
    private router: Router,
    private localStorageService: LocalStorageService,
    private ingredientsService: IngredientsService,
    private recipesService: RecipesService
  ) {
    this.isLoggedIn = this.authService.isLoggedIn();
  }

  logout() {
    this.snackbar.showMessage("You are logged out", "😞");
    this.authService.logout();
  }

  reload() {
    this.ingredientsService.ingredients$.next([]);
    this.recipesService.recipes$.next(null);
    this.localStorageService.clearRecipes();
    this.router.navigate(["/"]);
  }
}
