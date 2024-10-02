import { Component, Input } from "@angular/core";

@Component({
  selector: "app-recipe-card",
  templateUrl: "./recipe-card.component.html",
  styleUrl: "./recipe-card.component.scss",
})
export class RecipeCardComponent {
  @Input() recipe: any;
}
