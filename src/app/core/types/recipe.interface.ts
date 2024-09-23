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
