import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-home',
  template: `
    <p>
      home works!
    </p>
  `,
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {

  }
}
