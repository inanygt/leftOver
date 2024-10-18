import { NgModule } from "@angular/core";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer/footer.component";
import { MaterialModule } from "../shared/material.module";
import { SharedModule } from "../shared/shared.module";
import { RecipesService } from "./services/recipes.service";
import { LoginComponent } from "./components/authentication/login/login.component";
import { RegisterComponent } from "./components/authentication/register/register.component";
import { SnackBarService } from "./components/authentication/service/snackbar.service";
import { LocalStorageService } from "./services/local-storage";

@NgModule({
  declarations: [
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
  ],
  imports: [MaterialModule, SharedModule],
  exports: [HeaderComponent, FooterComponent],
  providers: [RecipesService, SnackBarService, LocalStorageService],
})
export class CoreModule {}
