class RecipeDetails extends Recipe {
   vegetarian: boolean;
   vegan: boolean;
   glutenFree: boolean;
   dairyFree: boolean;
   veryHealthy: boolean;
   cheap: boolean;
   veryPopular: boolean;
   sustainable: boolean;
   lowFodmap: boolean;
   weightWatcherSmartPoints: number;
   aggregateLikes: number;
   analyzedInstructions: Instruction[];
   cookingMinutes: number | null;
   creditsText: string;
   cuisines: string[];
   diets: string[];
   dishTypes: string[];
   extendedIngredients: Ingredient[];
   gaps: string;
   healthScore: number;
   instructions: string;
   license: string;
   occasions: string[];
   preparationMinutes: number | null;
   pricePerServing: number;
   readyInMinutes: number;
   servings: number;
   sourceName: string;
   sourceUrl: string;
   spoonacularScore: number;
   spoonacularSourceUrl: string;
   summary: string;

   constructor(
      recipe: Recipe, // Passing the base recipe details
      vegetarian: boolean,
      vegan: boolean,
      glutenFree: boolean,
      dairyFree: boolean,
      veryHealthy: boolean,
      cheap: boolean,
      veryPopular: boolean,
      sustainable: boolean,
      lowFodmap: boolean,
      weightWatcherSmartPoints: number,
      aggregateLikes: number,
      analyzedInstructions: Instruction[],
      cookingMinutes: number | null,
      creditsText: string,
      cuisines: string[],
      diets: string[],
      dishTypes: string[],
      extendedIngredients: Ingredient[],
      gaps: string,
      healthScore: number,
      instructions: string,
      license: string,
      occasions: string[],
      preparationMinutes: number | null,
      pricePerServing: number,
      readyInMinutes: number,
      servings: number,
      sourceName: string,
      sourceUrl: string,
      spoonacularScore: number,
      spoonacularSourceUrl: string,
      summary: string
   ) {
      super(
         recipe.id,
         recipe.title,
         recipe.image,
         recipe.imageType,
         recipe.likes,
         recipe.missedIngredientCount,
         recipe.missedIngredients,
         recipe.usedIngredientCount,
         recipe.usedIngredients
      );

      this.vegetarian = vegetarian;
      this.vegan = vegan;
      this.glutenFree = glutenFree;
      this.dairyFree = dairyFree;
      this.veryHealthy = veryHealthy;
      this.cheap = cheap;
      this.veryPopular = veryPopular;
      this.sustainable = sustainable;
      this.lowFodmap = lowFodmap;
      this.weightWatcherSmartPoints = weightWatcherSmartPoints;
      this.aggregateLikes = aggregateLikes;
      this.analyzedInstructions = analyzedInstructions;
      this.cookingMinutes = cookingMinutes;
      this.creditsText = creditsText;
      this.cuisines = cuisines;
      this.diets = diets;
      this.dishTypes = dishTypes;
      this.extendedIngredients = extendedIngredients;
      this.gaps = gaps;
      this.healthScore = healthScore;
      this.instructions = instructions;
      this.license = license;
      this.occasions = occasions;
      this.preparationMinutes = preparationMinutes;
      this.pricePerServing = pricePerServing;
      this.readyInMinutes = readyInMinutes;
      this.servings = servings;
      this.sourceName = sourceName;
      this.sourceUrl = sourceUrl;
      this.spoonacularScore = spoonacularScore;
      this.spoonacularSourceUrl = spoonacularSourceUrl;
      this.summary = summary;
   }
}
