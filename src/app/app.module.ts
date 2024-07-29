import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './components/shared/card/card/card.component';
import { InnerCardComponent } from './components/shared/inner-card/inner-card/inner-card.component';
import { InputIngredientsComponent } from './components/ingredients/input-ingredients/input-ingredients.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    InnerCardComponent,
    InputIngredientsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
