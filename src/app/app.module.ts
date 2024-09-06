import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './components/shared/card/card/card.component';
import { InnerCardComponent } from './components/shared/inner-card/inner-card/inner-card.component';
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


@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      CardComponent,
      InnerCardComponent,
      CardIngredientModalComponent,
      SearchRecipeComponent,
      PreferencesModalComponent,
      AddedIngredientsComponent,
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
      ReactiveFormsModule
   ],
   providers: [
      provideAnimationsAsync()
   ],
   bootstrap: [AppComponent]
})
export class AppModule { }
