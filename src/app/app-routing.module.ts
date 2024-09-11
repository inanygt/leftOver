import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PostComponent } from './features/post-recipe/components/post/post.component';
import { RecipeDetailsComponent } from './features/search-recipe/components/recipe-details/recipe-details.component';

const routes: Routes = [
   { path: 'post', component: PostComponent },
   { path: 'recipes/:recipeId', component: RecipeDetailsComponent },
   { path: '**', redirectTo: '' }
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
})
export class AppRoutingModule { }
