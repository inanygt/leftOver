import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardIngredientModalComponent } from './components/ingredients/card-ingredient-modal/card-ingredient-modal.component';
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



@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      CardIngredientModalComponent,
      SearchRecipeComponent,
      PreferencesModalComponent,
      AddedIngredientsComponent,
      SearchRecipeCardComponent,
      SearchRecipeListComponent,
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
      MatChipsModule
   ],
   providers: [
      provideAnimationsAsync()
   ],
   bootstrap: [AppComponent]
})
export class AppModule { }
