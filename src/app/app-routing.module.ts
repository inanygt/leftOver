import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RecipeDetailsComponent } from './features/search-recipe/components/recipe-details/recipe-details.component';
import { SearchComponent } from './features/search-recipe/components/search/search.component';
import { PostComponent } from './features/post-recipe/components/post/post.component';

const routes: Routes = [
   { path: 'post', component: PostComponent },
   { path: '**', redirectTo: '' }
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
})
export class AppRoutingModule { }
