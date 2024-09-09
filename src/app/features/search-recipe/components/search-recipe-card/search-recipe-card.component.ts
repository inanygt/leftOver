import { Component, Input } from '@angular/core';

@Component({
   selector: 'app-search-recipe-card',
   templateUrl: './search-recipe-card.component.html',
   styleUrl: './search-recipe-card.component.scss'
})
export class SearchRecipeCardComponent {
   @Input() recipe: any;
}
