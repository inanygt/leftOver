import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class IngredientService {
    ingredients: string[] = [];

    constructor() { }

    addIngredient(ingredient: string) {
        this.ingredients.push(ingredient);
    }

    getAllIngredients() {
        return this.ingredients;
    }

    deleteIngredient(ingredient: string) {
        this.ingredients = this.ingredients.filter((i) => i !== ingredient);
    }

    deleteAllIngredients() {
        this.ingredients = [];
        return this.ingredients;
    }
}
