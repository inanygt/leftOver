import { NgModule } from "@angular/core";
import { HeaderComponent } from "./components/header/header.component";
import { MaterialModule } from "../shared/material.module";
import { SharedModule } from "../shared/shared.module";
import { RecipesService } from "./services/recipes.service";
import { LoginComponent } from './components/authentication/login/login.component';
import { RegisterComponent } from './components/authentication/register/register.component';
import { SnackBarService } from "./components/authentication/service/snackbar.service";

@NgModule({
   declarations: [HeaderComponent, LoginComponent, RegisterComponent],
   imports: [MaterialModule, SharedModule],
   exports: [HeaderComponent],
   providers: [RecipesService, SnackBarService]

})

export class CoreModule { }
