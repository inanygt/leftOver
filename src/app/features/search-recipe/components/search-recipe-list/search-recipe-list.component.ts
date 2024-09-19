import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../../../core/services/recipes.service';

@Component({
   selector: 'app-search-recipe-list',
   templateUrl: './search-recipe-list.component.html',
   styleUrl: './search-recipe-list.component.scss',
})
export class SearchRecipeListComponent implements OnInit {
   recipes: any[] = [];

   constructor(
      private recipesService: RecipesService
   ) {
   }

   ngOnInit(): void {
      this.recipesService.recipes$.subscribe((recipes) => {
         this.recipes = recipes;
         console.log(recipes);
      })
   }
}
