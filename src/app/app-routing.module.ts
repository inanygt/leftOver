import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './features/post-recipe/components/post/post.component';
import { RecipeDetailsComponent } from './features/search-recipe/components/recipe-details/recipe-details.component';
import { LoginComponent } from './core/components/authentication/login/login.component';
import { RegisterComponent } from './core/components/authentication/register/register.component';
import { CanActive } from './core/guards/auth.guard';
import { FavoriteComponent } from './features/favorite-recipe/components/favorite/favorite.component';

const routes: Routes = [
   { path: 'login', component: LoginComponent },
   { path: 'register', component: RegisterComponent },
   { path: 'favorite', component: FavoriteComponent, canActivate: [CanActive] },
   { path: 'post', component: PostComponent, canActivate: [CanActive] },
   { path: 'recipes/:recipeId', component: RecipeDetailsComponent },
   { path: '**', redirectTo: '' }
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
})
export class AppRoutingModule { }
