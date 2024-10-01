import { Injectable } from '@angular/core';

@Injectable({
   providedIn: 'root',
})
export class LocalStorageService {
   getRecipes() {
      const recipes = localStorage.getItem('recipes');
      return recipes ? JSON.parse(recipes) : null;
   }

   setRecipes(recipes) {
      localStorage.setItem('recipes', JSON.stringify(recipes));
   }

   clearRecipes() {
      localStorage.removeItem('recipes');
   }
}
