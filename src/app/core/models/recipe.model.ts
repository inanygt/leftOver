class Recipe {
   id: number;
   title: string;
   image: string;
   imageType: string;
   likes: number;
   missedIngredientCount: number;
   missedIngredients: Ingredient[];
   usedIngredientCount: number;
   usedIngredients: Ingredient[];

   constructor(
      id: number,
      title: string,
      image: string,
      imageType: string,
      likes: number,
      missedIngredientCount: number,
      missedIngredients: Ingredient[],
      usedIngredientCount: number,
      usedIngredients: Ingredient[]
   ) {
      this.id = id;
      this.title = title;
      this.image = image;
      this.imageType = imageType;
      this.likes = likes;
      this.missedIngredientCount = missedIngredientCount;
      this.missedIngredients = missedIngredients;
      this.usedIngredientCount = usedIngredientCount;
      this.usedIngredients = usedIngredients;
   }
}
