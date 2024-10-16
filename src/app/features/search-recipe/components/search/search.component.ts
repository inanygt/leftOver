import { Component } from "@angular/core";
import { map, Observable } from "rxjs";
import { IngredientsService } from "../../services/ingredients.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrl: "./search.component.scss",
})
export class SearchComponent {
  inputLength$: Observable<number>;
  constructor(private ingredientsService: IngredientsService) {
    this.inputLength$ = this.ingredientsService.inputValue$.pipe(
      map((inputValue) => inputValue.length)
    );
  }
}
