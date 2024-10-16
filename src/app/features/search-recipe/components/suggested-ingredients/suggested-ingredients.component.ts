import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { IngredientsService } from "../../services/ingredients.service";
import { Observable, switchMap } from "rxjs";
import { RecipesService } from "../../../../core/services/recipes.service";
import { SuggestedIngredient } from "../../../../core/types/ingredient.interface";

@Component({
  selector: "app-suggested-ingredients",
  templateUrl: "./suggested-ingredients.component.html",
  styleUrl: "./suggested-ingredients.component.scss",
})
export class SuggestedIngredientsComponent {
  @Output() ingredientControl: EventEmitter<string> =
    new EventEmitter<string>();

  isLoading: boolean = false;

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

  getAisle(aisle: string): string {
    let value = aisle.toLocaleLowerCase();

    if (value.includes("meat")) {
      return "🍖";
    } else if (value.includes("produce")) {
      return "🍎";
    } else if (value.includes("alcoholic")) {
      return "🍺";
    } else if (value.includes("cheese")) {
      return "🧀";
    } else if (value.includes("bread") || value.includes("bakery")) {
      return "🥖";
    }
    return "🧑‍🍳";
  }

  // getName(name: string): string {
  //   if (name.includes('banana')) {
  //     return '🍌'
  //   }
  //   return '';
  // }

  selectSuggestedIngredient(ingredient: SuggestedIngredient): void {
    ingredient.isLoading = true;
    setTimeout(() => {
      this.ingredientControl.emit("");
      this.ingredientsService.addIngredient(ingredient.name);

      this.recipesService.searchRecipe().subscribe((response) => {
        this.recipesService.recipes$.next(response);
        ingredient.isLoading = false;
      });
    }, 1000);
  }
}
