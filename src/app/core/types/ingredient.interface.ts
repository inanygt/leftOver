export interface IngredientInterface {
  id: string;
  text: string;
}

export interface SuggestedIngredient {
  aisle: string;
  id: string;
  image: string;
  name: string;
  possibleUnits: string[];
  isLoading: boolean;
}
