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
  preparedIngredients: any;
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

    const preparedIngredients = this.prepareForApi(this.ingredients);
    console.log(preparedIngredients);


    this.spoonApi.searchRecipe(preparedIngredients).subscribe(res => {
      this.recipes = res;
      console.log(this.recipes);
    })
  }

  prepareForApi(ingredients: string[]): string {
    if (ingredients.length === 0) return "";

    let preparedIngredients = ingredients[0];
    for (let i = 1; i < ingredients.length; i++) {
      preparedIngredients += `,+${ingredients[i]}`;
    }
    return preparedIngredients;
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
