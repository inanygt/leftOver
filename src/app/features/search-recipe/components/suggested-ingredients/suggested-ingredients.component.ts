import {
  Component,
  EventEmitter,
  forwardRef,
  OnInit,
  Output,
  output,
} from "@angular/core";
import { IngredientsService } from "../../services/ingredients.service";
import { map, Observable, switchMap, tap } from "rxjs";
import { RecipesService } from "../../../../core/services/recipes.service";

@Component({
  selector: "app-suggested-ingredients",
  templateUrl: "./suggested-ingredients.component.html",
  styleUrl: "./suggested-ingredients.component.scss",
})
export class SuggestedIngredientsComponent implements OnInit {
  @Output() ingredientControl: EventEmitter<string> =
    new EventEmitter<string>();

  suggestingIngredient$: Observable<string>;
  suggestedIngredients$: Observable<any[]>;
  detailedIngredients = [];

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

  ngOnInit(): void {
    this.suggestedIngredients$.subscribe((ingredients) => {
      ingredients.map((ingredient) => {
        this.ingredientsService
          .getIngredientInformation(ingredient.id)
          .subscribe((ingredient) => {
            this.detailedIngredients.push(ingredient);
            console.log(this.detailedIngredients);
          });
      });
    });
  }
}
