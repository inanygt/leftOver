import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterLinkActive, RouterOutlet } from "@angular/router";
import { RouterModule } from "@angular/router";
import { NgSelectModule } from "@ng-select/ng-select";
import { GoBackComponent } from "./components/go-back/go-back.component";
import { MaterialModule } from "./material.module";
import { RecipeCardComponent } from "./components/recipe-card/recipe-card.component";

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterLinkActive,
    RouterOutlet,
    RouterModule,
    CommonModule,
    NgSelectModule,
    MaterialModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    RouterLinkActive,
    RouterOutlet,
    RouterModule,
    CommonModule,
    NgSelectModule,
    MaterialModule,
    GoBackComponent,
    RecipeCardComponent,
  ],
  declarations: [GoBackComponent, RecipeCardComponent],
})
export class SharedModule {}
