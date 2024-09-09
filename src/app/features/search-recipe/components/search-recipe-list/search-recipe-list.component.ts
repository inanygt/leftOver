import { Component, Input } from '@angular/core';

@Component({
   selector: 'app-search-recipe-list',
   templateUrl: './search-recipe-list.component.html',
   styleUrl: './search-recipe-list.component.scss'
})
export class SearchRecipeListComponent {
   @Input() recipes: any;
}
