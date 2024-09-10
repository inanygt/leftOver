import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { SearchRecipeComponent } from './features/search-recipe/components/search-recipe/search-recipe.component';
import { PreferencesModalComponent } from './features/search-recipe/components/preferences-modal/preferences-modal.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { AddedIngredientsComponent } from './features/search-recipe/components/added-ingredients/added-ingredients.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { SearchRecipeCardComponent } from './features/search-recipe/components/search-recipe-card/search-recipe-card.component';
import { MatCardModule } from '@angular/material/card';
import { SearchRecipeListComponent } from './features/search-recipe/components/search-recipe-list/search-recipe-list.component';
import { MatChipsModule } from '@angular/material/chips';
import { RecipeDetailsComponent } from './features/search-recipe/components/recipe-details/recipe-details.component';
import { RouterLinkActive, RouterOutlet } from '@angular/router';
import { SearchComponent } from './features/search-recipe/components/search/search.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { HeaderComponent } from './core/components/header/header.component';
import { PostComponent } from './features/post-recipe/components/post/post.component';
import { FavoriteRecipeComponent } from './features/favorite-recipe/favorite-recipe.component';
import { ProfileComponent } from './features/profile/profile.component';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
   declarations: [
      AppComponent,
      SearchRecipeComponent,
      PreferencesModalComponent,
      AddedIngredientsComponent,
      SearchRecipeCardComponent,
      SearchRecipeListComponent,
      RecipeDetailsComponent,
      SearchComponent,
      HeaderComponent,
      PostComponent,
      FavoriteRecipeComponent,
      ProfileComponent,
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      AppRoutingModule,
      NgbModule,
      HttpClientModule,
      FormsModule,
      MatFormFieldModule,
      MatInputModule,
      MatIconModule,
      MatDividerModule,
      MatButtonModule,
      MatDialogModule,
      MatSelectModule,
      MatButtonToggleModule,
      ReactiveFormsModule,
      MatCardModule,
      MatChipsModule,
      RouterOutlet,
      MatToolbarModule,
      MatMenuModule,
      RouterLinkActive,
      MatExpansionModule
   ],
   providers: [
      provideAnimationsAsync()
   ],
   bootstrap: [AppComponent]
})
export class AppModule { }
