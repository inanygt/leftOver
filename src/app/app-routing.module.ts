import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PostComponent } from "./features/post-recipe/components/post/post.component";
import { RecipeDetailsComponent } from "./features/search-recipe/components/recipe-details/recipe-details.component";
import { LoginComponent } from "./core/components/authentication/login/login.component";
import { RegisterComponent } from "./core/components/authentication/register/register.component";
import { CanActive } from "./core/guards/auth.guard";
import { FavoriteComponent } from "./features/favorite-recipe/components/favorite/favorite.component";
import { SearchComponent } from "./features/search-recipe/components/search/search.component";
import { ShoppingCartComponent } from "./features/shopping-cart/components/shopping-cart/shopping-cart.component";

const routes: Routes = [
  { path: "", component: SearchComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "favorite", component: FavoriteComponent, canActivate: [CanActive] },
  { path: "post", component: PostComponent, canActivate: [CanActive] },
  { path: "recipes/:recipeId", component: RecipeDetailsComponent },
  { path: "shopping-cart", component: ShoppingCartComponent },
  { path: "**", redirectTo: "" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
