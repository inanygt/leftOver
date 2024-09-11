import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './shared/material.module';
import { SearchRecipeModule } from './features/search-recipe/search-recipe.module';
import { PostRecipeModule } from './features/post-recipe/post-recipe.module';

@NgModule({
   declarations: [
      AppComponent,
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      AppRoutingModule,
      HttpClientModule,
      SharedModule,
      CoreModule,
      MaterialModule,
      SearchRecipeModule,
      PostRecipeModule
   ],
   providers: [
      provideAnimationsAsync()
   ],
   bootstrap: [AppComponent]
})
export class AppModule { }
