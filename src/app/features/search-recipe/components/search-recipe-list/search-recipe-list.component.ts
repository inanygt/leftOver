import { Component } from '@angular/core';
import { RecipesService } from '../../../../core/services/recipes.service';
import { RecipeResponse } from '../../../../core/types/recipe.interface';
import { map, Observable } from 'rxjs';

@Component({
   selector: 'app-search-recipe-list',
   templateUrl: './search-recipe-list.component.html',
   styleUrl: './search-recipe-list.component.scss',
})
export class SearchRecipeListComponent {
   recipesResponse$: Observable<RecipeResponse>;
   recipes$: Observable<any>;
   totalResult$: Observable<number>;

   constructor(
      private recipesService: RecipesService
   ) {
      this.recipesResponse$ = this.recipesService.recipes$;
      this.totalResult$ = this.recipesService.totalResultsRecipes$;

      this.recipes$ = this.recipesResponse$.pipe(
         map((response: RecipeResponse) => response?.results)
      );
   }
}
