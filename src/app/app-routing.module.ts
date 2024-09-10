import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RecipeDetailsComponent } from './features/search-recipe/components/recipe-details/recipe-details.component';
import { SearchComponent } from './features/search-recipe/components/search/search.component';
import { PostComponent } from './features/post-recipe/components/post/post.component';
import { FavoriteRecipeComponent } from './features/favorite-recipe/favorite-recipe.component';
import { ProfileComponent } from './features/profile/profile.component';

const routes: Routes = [
   { path: '', component: SearchComponent }, // Default route (home page)
   { path: 'recipes/:recipeId', component: RecipeDetailsComponent }, // Dynamic route for recipe details
   { path: 'post', component: PostComponent },
   { path: 'favorite', component: FavoriteRecipeComponent },
   { path: 'profile', component: ProfileComponent },
   { path: '**', redirectTo: '' } // Fallback route to home if the path doesn't exist
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
})
export class AppRoutingModule { }
