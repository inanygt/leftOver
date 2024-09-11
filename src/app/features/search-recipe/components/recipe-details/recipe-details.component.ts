import { Component, OnInit, Input, signal, DestroyRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { Recipe } from 'src/app/models/recipe.model'; // Import Recipe model
import { SpoonApiService } from '../../../../services/spoon-api.service';
import { Location } from '@angular/common';


@Component({
   selector: 'app-recipe-details',
   templateUrl: './recipe-details.component.html',
   styleUrl: './recipe-details.component.scss'
})
export class RecipeDetailsComponent implements OnInit {
   recipe: any;

   readonly panelOpenState = signal(false);

   constructor(
      private route: ActivatedRoute,
      private spoonApi: SpoonApiService,
      private location: Location,
      private destroyRef: DestroyRef
   ) { }

   ngOnInit(): void {
      const recipeId = this.route.snapshot.paramMap.get('recipeId');

      if (recipeId) {
         this.recipe = this.spoonApi.getRecipeById(recipeId).subscribe({
            next: (res) => {
               this.recipe = res;
               console.log(this.recipe)
            },
            error: (error) => {
               console.log(error);
            },
            complete: () => {

            }
         });
      }

      // this.destroyRef.onDestroy(() => this.recipe.unsubscribe())
   }

   goBack() {
      this.location.back();
   }
}