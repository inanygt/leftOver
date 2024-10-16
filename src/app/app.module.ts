import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { CoreModule } from "./core/core.module";
import { SharedModule } from "./shared/shared.module";
import { MaterialModule } from "./shared/material.module";
import { SearchRecipeModule } from "./features/search-recipe/search-recipe.module";
import { PostRecipeModule } from "./features/post-recipe/post-recipe.module";
import { environment } from "./environment/environment";

import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { FavoriteComponent } from "./features/favorite-recipe/components/favorite/favorite.component";
import { AngularFirestoreModule } from "@angular/fire/compat/firestore";
import { AngularFireStorageModule } from "@angular/fire/compat/storage";
import { FavoriteRecipeModule } from "./features/favorite-recipe/favorite-recipe.module";
import { ShoppingCartModule } from "./features/shopping-cart/shopping-cart.module";

@NgModule({
  declarations: [AppComponent, FavoriteComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    CoreModule,
    MaterialModule,
    SearchRecipeModule,
    FavoriteRecipeModule,
    ShoppingCartModule,
    PostRecipeModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
