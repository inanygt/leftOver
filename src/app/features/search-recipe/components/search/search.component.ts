import { Component, OnInit } from '@angular/core';
import { IngredientInterface } from '../../../../core/types/ingredient.interface';
import { AuthService } from '../../../../core/components/authentication/service/auth.service';

@Component({
   selector: 'app-search',
   templateUrl: './search.component.html',
   styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit {
   title = 'leftOver';

   constructor(
      private authService: AuthService
   ) { }

   ngOnInit(): void {

   }
}
