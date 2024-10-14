import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class LocalStorageService {
  getRecipes() {
    const recipes = localStorage.getItem("recipes");
    return recipes ? JSON.parse(recipes) : null;
  }

  setRecipes(recipe) {
    localStorage.setItem("recipes", JSON.stringify(recipe));
  }

  clearRecipes() {
    localStorage.removeItem("recipes");
  }

  getIngredients() {
    const ingredients = localStorage.getItem("ingredients");
    return ingredients;
  }

  setIngredients(ingredients) {
    localStorage.setItem("ingredients", JSON.stringify(ingredients));
  }

  clearIngredients() {
    localStorage.removeItem("ingredients");
  }
}
