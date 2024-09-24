import { DietType } from "../types/diet-type.enum";
import { IntoleranceType } from "../types/intolerance.enum";
import { RecipeTimesType } from "../types/recipe-times.enum";
import { SortRecipeType } from "../types/sort-recipe.enum";

export class RecipeFilter {
   ingredients: string[];
   dietType: DietType;
   intolerances: IntoleranceType[];
   sortOptions: SortRecipeType;
   recipeTime: RecipeTimesType;

   constructor(
      ingredients: string[] | [],
      dietType: DietType,
      intolerances: IntoleranceType[] | [],
      sortOptions: SortRecipeType | null,
      recipeTime: RecipeTimesType | null
   ) {
      this.ingredients = ingredients;
      this.dietType = dietType;
      this.intolerances = intolerances;
      this.sortOptions = sortOptions;
      this.recipeTime = recipeTime;
   }
}
