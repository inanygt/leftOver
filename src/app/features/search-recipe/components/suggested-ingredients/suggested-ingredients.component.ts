import {
  Component,
  EventEmitter,
  forwardRef,
  Output,
  output,
} from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { IngredientsService } from "../../services/ingredients.service";
import { Observable, switchMap } from "rxjs";
import { RecipesService } from "../../../../core/services/recipes.service";

@Component({
  selector: "app-suggested-ingredients",
  templateUrl: "./suggested-ingredients.component.html",
  styleUrl: "./suggested-ingredients.component.scss",
})
export class SuggestedIngredientsComponent {
  @Output() ingredientControl: EventEmitter<string> =
    new EventEmitter<string>();

  suggestingIngredient$: Observable<string>;
  suggestedIngredients$: Observable<any[]>;

  constructor(
    private ingredientsService: IngredientsService,
    private recipesService: RecipesService
  ) {
    this.suggestedIngredients$ =
      this.ingredientsService.suggestingIngredient$.pipe(
        switchMap((ingredient) =>
          this.ingredientsService.autocompleteIngredient(ingredient)
        )
      );
  }

  // This method is called when the user selects a suggested ingredient
  selectSuggestedIngredient(ingredient: string): void {
    this.ingredientControl.emit("");
    this.ingredientsService.addIngredient(ingredient);
    this.recipesService.searchRecipe().subscribe((response) => {
      this.recipesService.recipes$.next(response);
    });
  }
}
