import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { RecipesService } from "../../../../core/services/recipes.service";
import { IngredientsService } from "../../services/ingredients.service";
import { Observable } from "rxjs";
import { IngredientInterface } from "../../../../core/types/ingredient.interface";
import { FormControl } from "@angular/forms";
import { MatChipInputEvent } from "@angular/material/chips";
import { MatAutocompleteSelectedEvent } from "@angular/material/autocomplete";
import { LocalStorageService } from "../../../../core/services/local-storage";

@Component({
  selector: "app-search-recipe",
  templateUrl: "./search-recipe.component.html",
  styleUrl: "./search-recipe.component.scss",
})
export class SearchRecipeComponent implements OnInit {
  ingredientControl = new FormControl("");

  ingredients$: Observable<IngredientInterface[]>;
  suggestedIngredients$: Observable<any[]>;

  @ViewChild("ingredientInput") ingredientInput: ElementRef<HTMLInputElement>;

  constructor(
    private ingredientsService: IngredientsService,
    private recipesService: RecipesService,
    private localStorageService: LocalStorageService
  ) {
    this.ingredients$ = this.ingredientsService.ingredients$;
  }

  add(event: MatChipInputEvent) {
    const value = event.value;
    if (value) {
      this.ingredientsService.addIngredient(value);
      this.localStorageService.setIngredients(value);
    }
    this.ingredientControl.setValue("");
    this.ingredientInput.nativeElement.value = "";

    this.localStorageService.getIngredients();
    this.searchRecipe();
  }

  deleteIngredient(id: string) {
    this.ingredientsService.deleteIngredient(id);
    this.searchRecipe();
  }

  selectSuggestedIngredient(event: MatAutocompleteSelectedEvent) {
    const value = event.option.value.name;

    const formattedValue = value.replace(/\s+/g, "-");

    const matChipInputEvent: MatChipInputEvent = {
      input: this.ingredientInput.nativeElement,
      value: formattedValue,
      chipInput: null,
    };

    this.ingredientControl.setValue("");
    this.ingredientInput.nativeElement.value = "";

    this.add(matChipInputEvent);
  }

  private searchRecipe(): void {
    this.recipesService.searchRecipe().subscribe((response) => {
      this.recipesService.recipes$.next(response);
    });
  }

  ngOnInit(): void {
    this.ingredientControl.valueChanges.subscribe((value) => {
      this.suggestedIngredients$ =
        this.ingredientsService.autocompleteIngredient(value);
    });
  }
}
