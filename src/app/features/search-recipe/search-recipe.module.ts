import { NgModule } from "@angular/core";
import { PreferencesModalComponent } from "./components/preferences-modal/preferences-modal.component";
import { RecipeDetailsComponent } from "./components/recipe-details/recipe-details.component";
import { SearchComponent } from "./components/search/search.component";
import { SearchRecipeComponent } from "./components/search-recipe/search-recipe.component";
import { SearchRecipeListComponent } from "./components/search-recipe-list/search-recipe-list.component";
import { MaterialModule } from "../../shared/material.module";
import { SharedModule } from "../../shared/shared.module";
import { RouterModule, Routes } from "@angular/router";
import { IngredientsService } from "./services/ingredients.service";
import { SimilarRecipesComponent } from "./components/similar-recipes/similar-recipes.component";
import { PreferencesComponent } from "./components/preferences/preferences.component";

const routes: Routes = [{ path: "", component: SearchComponent }];

@NgModule({
  declarations: [
    PreferencesModalComponent,
    RecipeDetailsComponent,
    SearchComponent,
    SearchRecipeComponent,
    SearchRecipeListComponent,
    SimilarRecipesComponent,
    PreferencesComponent,
  ],
  imports: [MaterialModule, SharedModule, RouterModule.forChild(routes)],
  providers: [IngredientsService],
})
export class SearchRecipeModule {}
