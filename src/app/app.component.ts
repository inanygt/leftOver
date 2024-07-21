import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { IngredientService } from './services/ingredients/ingredient.service';
import { SpoonApiService } from './services/spoon-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit{
  title = 'leftOver';
  ingredients: string[] = [];
  recipes: any[] = [];
  @ViewChild('ingredientRef', {static: false}) ingredientElementRef: ElementRef;

  userInput: string;

  constructor(
    private ingredientService: IngredientService,
    private spoonApi: SpoonApiService
  ) {}

  handleUserInput() {
    this.ingredientService.addIngredient(this.userInput);
    this.ingredients = this.ingredientService.getAllIngredients();
    this.userInput = "";
    this.spoonApi.searchRecipe(this.ingredients).subscribe(res => {
      this.recipes = res;
    })
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
