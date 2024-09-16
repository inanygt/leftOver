import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../../../core/services/recipes.service';
import { catchError, combineLatest, map, mergeMap, Observable, of } from 'rxjs';

@Component({
   selector: 'app-similar-recipes',
   templateUrl: './similar-recipes.component.html',
   styleUrl: './similar-recipes.component.scss'
})
export class SimilarRecipesComponent {

   similarRecipes$ = this.recipesService.similarRecipes$
   detailedRecipes$ = this.getDetailedRecipes$();

   constructor(
      private recipesService: RecipesService
   ) { }

   getDetailedRecipes$() {
      return of([]);
      // return this.similarRecipes$.pipe(
      //    // Extract recipe IDs
      //    map(recipes => recipes.map(recipe => recipe.id)),
      //    // Flatten the array of IDs into individual observable streams
      //    mergeMap(ids => {
      //       // Create an array of observables for fetching each recipe's details
      //       const detailedRecipeObservables = ids.map(id =>
      //          this.recipesService.getRecipeById(id).pipe(
      //             catchError(error => {
      //                console.error('Error fetching recipe details:', error);
      //                return of(null); // Handle error and continue
      //             })
      //          )
      //       );
      //       // Combine all observables into one
      //       return combineLatest(detailedRecipeObservables);
      //    })
      // );
   }
}
