import { Component, OnInit, signal } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RecipesService } from "../../../../core/services/recipes.service";

@Component({
  selector: "app-recipe-details",
  templateUrl: "./recipe-details.component.html",
  styleUrl: "./recipe-details.component.scss",
})
export class RecipeDetailsComponent implements OnInit {
  recipe: any;

  readonly panelOpenState = signal(false);

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipesService
  ) {}

  ngOnInit(): void {
    const recipeId = this.route.snapshot.paramMap.get("recipeId");
    this.recipeService.recipeId$.next(recipeId);
    this.recipeService.getSimilarRecipes(recipeId).subscribe((recipes) => {
      this.recipeService.similarRecipes$.next(recipes);
    });

    if (recipeId) {
      this.recipe = this.recipeService.getRecipeById(recipeId).subscribe({
        next: (res) => {
          this.recipe = res;
        },
        error: (error) => {
          console.log(error);
        },
        complete: () => {},
      });
    }
  }
}
