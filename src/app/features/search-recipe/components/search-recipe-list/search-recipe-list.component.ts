import { Component, OnInit } from '@angular/core';
import { SpoonApiService } from '../../../../services/spoon-api.service';

@Component({
   selector: 'app-search-recipe-list',
   templateUrl: './search-recipe-list.component.html',
   styleUrl: './search-recipe-list.component.scss',
})
export class SearchRecipeListComponent implements OnInit {
   recipes: any[] = [];

   constructor(
      private spoonApi: SpoonApiService
   ) {
   }

   ngOnInit(): void {
      this.spoonApi.recipes$.subscribe((recipes) => {
         this.recipes = recipes;
      })
   }
}
