import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../../../core/services/recipes.service';
import { Observable } from 'rxjs';

@Component({
   selector: 'app-similar-recipes',
   templateUrl: './similar-recipes.component.html',
   styleUrl: './similar-recipes.component.scss'
})
export class SimilarRecipesComponent implements OnInit {
   recipes$: Observable<any[]>;

   constructor(
      private recipesService: RecipesService
   ) {
      this.recipes$ = this.recipesService.similarRecipes$;
   }

   ngOnInit(): void {
   }
}
