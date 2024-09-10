import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { Recipe } from 'src/app/models/recipe.model'; // Import Recipe model
import { SpoonApiService } from '../../../../services/spoon-api.service';

@Component({
   selector: 'app-recipe-details',
   templateUrl: './recipe-details.component.html',
   styleUrl: './recipe-details.component.scss'
})
export class RecipeDetailsComponent implements OnInit {
   recipe: any;

   constructor(private route: ActivatedRoute, private spoonApi: SpoonApiService) { }

   ngOnInit(): void {
      // Get the ID from the route parameters
      const recipeId = this.route.snapshot.paramMap.get('id');

      // Fetch the recipe using the service
      if (recipeId) {
         this.recipe = this.spoonApi.getRecipeById(recipeId);
      }
   }
}
