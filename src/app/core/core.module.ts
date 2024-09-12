import { NgModule } from "@angular/core";
import { HeaderComponent } from "./components/header/header.component";
import { MaterialModule } from "../shared/material.module";
import { SharedModule } from "../shared/shared.module";
import { RecipesService } from "./services/recipes.service";
import { LoginComponent } from './components/authentication/login/login.component';
import { RegisterComponent } from './components/authentication/register/register.component';

@NgModule({
   declarations: [HeaderComponent, LoginComponent, RegisterComponent],
   imports: [MaterialModule, SharedModule],
   exports: [HeaderComponent],
   providers: [RecipesService]

})

export class CoreModule { }
