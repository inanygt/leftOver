export interface Recipe {
   id: string,
   title: string,
   image: string,
   imageType: string
}

export interface RecipeResponse {
   results: Recipe[],
   offset: number,
   number: number,
   totalResults: number;
}

export interface firestoreRecipe {
   name: string,
   id: string,
   UID: string,
   image: string
}
