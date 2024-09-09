import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RecipeDetailsComponent } from './features/search-recipe/recipe-details/recipe-details.component';
import { SearchComponent } from './features/search-recipe/components/search/search.component';

const routes: Routes = [
   { path: '', component: SearchComponent }, // Default route (home page)
   { path: 'recipe/:id', component: RecipeDetailsComponent }, // Dynamic route for recipe details
   { path: '**', redirectTo: '' } // Fallback route to home if the path doesn't exist
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
})
export class AppRoutingModule { }
