import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { IngredientService } from './services/ingredients/ingredient.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit{
  title = 'leftOver';
  ingredients: string[] = [];
  @ViewChild('ingredientRef', {static: false}) ingredientElementRef: ElementRef;

  userInput: string;

  constructor(private ingredientService: IngredientService) {}

  handleUserInput() {
    this.ingredientService.addIngredient(this.userInput);
    this.ingredients = this.ingredientService.getAllIngredients();
    this.userInput = "";
  }

  deleteIngredient(ingredient: string) {
    this.ingredientService.deleteIngredient(ingredient);
    this.ingredients = this.ingredientService.getAllIngredients();
  }

  removeAllIngredients() {
    this.ingredients = this.ingredientService.deleteAllIngredients();
  }

  ngAfterViewInit(): void {
    this.ingredientElementRef.nativeElement.focus();
  }
}
