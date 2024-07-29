import { AfterViewInit, Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { IngredientService } from '../../../services/ingredients/ingredient.service';
import { SpoonApiService } from '../../../services/spoon-api.service';

@Component({
  selector: 'app-input-ingredients',
  template: `
        <div class="mb-3 mt-5">
              <label for="ingredientInput" class="form-label">What's in my fridge?</label>
              <input #ingredientRef (keydown.enter)="handleUserInput()" [(ngModel)]="userInput" type="text"
                class="form-control" id="ingredientInput" placeholder="banana, apple, ... ">
        </div>
  `,
  styleUrl: './input-ingredients.component.scss'
})
export class InputIngredientsComponent implements AfterViewInit {

  ingredients: string[] = [];
  userInput: string;
  recipes: any[] = [];

  @Output() recipesChanged = new EventEmitter<any[]>();
  @Output() ingredientsChanged = new EventEmitter<any[]>();


  @ViewChild('ingredientRef', {static: false}) ingredientElementRef: ElementRef;

  constructor(
    private ingredientService: IngredientService,
    private spoonApi: SpoonApiService
  ) {}

  handleUserInput() {
    this.ingredientService.addIngredient(this.userInput);
    this.ingredients = this.ingredientService.getAllIngredients();
    this.ingredientsChanged.emit(this.ingredients);
    this.userInput = "";

    const preparedIngredients = this.prepareForApi(this.ingredients);

    this.spoonApi.searchRecipe(preparedIngredients).subscribe(res => {
      this.recipes = res;
      this.recipesChanged.emit(this.recipes); // Emit the recipes to the parent component
    })
  }

    prepareForApi(ingredients: string[]): string {
    // if (ingredients.length === 0) return "";
    let preparedIngredients = ingredients[0];
    for (let i = 1; i < ingredients.length; i++) {
      preparedIngredients += `,+${ingredients[i]}`;
    }
    return preparedIngredients;
  }

   ngAfterViewInit(): void {
    this.ingredientElementRef.nativeElement.focus();
  }

}
