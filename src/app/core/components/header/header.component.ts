import { Component, OnInit } from "@angular/core";
import { AuthService } from "../authentication/service/auth.service";
import { Observable } from "rxjs";
import { SnackBarService } from "../authentication/service/snackbar.service";
import { LocalStorageService } from "../../services/local-storage";

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
    private localStorageService: LocalStorageService
  ) {
    this.isLoggedIn = this.authService.isLoggedIn();
  }

  logout() {
    this.snackbar.showMessage("You are logged out", "😞");
    this.authService.logout();
  }

  reload() {
    window.location.reload();
    this.localStorageService.clearRecipes();
  }
}
