import { NgModule } from "@angular/core";
import { PreferencesModalComponent } from "./components/preferences-modal/preferences-modal.component";
import { RecipeDetailsComponent } from "./components/recipe-details/recipe-details.component";
import { SearchComponent } from "./components/search/search.component";
import { SearchRecipeComponent } from "./components/search-recipe/search-recipe.component";
import { SearchRecipeCardComponent } from "./components/search-recipe-card/search-recipe-card.component";
import { SearchRecipeListComponent } from "./components/search-recipe-list/search-recipe-list.component";
import { MaterialModule } from "../../shared/material.module";
import { SharedModule } from "../../shared/shared.module";
import { RouterModule, Routes } from "@angular/router";
import { IngredientsService } from "./services/ingredients.service";
import { PreferencesButtonComponent } from './components/preferences-button/preferences-button.component';
import { SimilarRecipesComponent } from './components/similar-recipes/similar-recipes.component';

const routes: Routes = [
   { path: '', component: SearchComponent },
   // { path: 'recipes/:recipeId', component: RecipeDetailsComponent },
]

@NgModule({
   declarations: [
      PreferencesModalComponent,
      RecipeDetailsComponent,
      SearchComponent,
      SearchRecipeComponent,
      SearchRecipeCardComponent,
      SearchRecipeListComponent,
      PreferencesButtonComponent,
      SimilarRecipesComponent
   ],
   imports: [
      MaterialModule,
      SharedModule,
      RouterModule.forChild(routes)
   ],
   providers: [IngredientsService]
})

export class SearchRecipeModule { }
