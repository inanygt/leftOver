import { Component } from "@angular/core";
import { Location } from "@angular/common";

@Component({
  selector: "app-go-back",
  templateUrl: "./go-back.component.html",
  styleUrl: "./go-back.component.scss",
})
export class GoBackComponent {
  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }
}
