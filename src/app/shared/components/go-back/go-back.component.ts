import { Component } from "@angular/core";
import { Location } from "@angular/common";

@Component({
  selector: "app-go-back",
  templateUrl: "./go-back.component.html",
})
export class GoBackComponent {
  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }
}
