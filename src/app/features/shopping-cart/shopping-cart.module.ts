import { NgModule } from "@angular/core";
import { MaterialModule } from "../../shared/material.module";
import { SharedModule } from "../../shared/shared.module";
import { ShoppingCartComponent } from "./components/shopping-cart/shopping-cart.component";

@NgModule({
  declarations: [ShoppingCartComponent],
  imports: [MaterialModule, SharedModule],
  providers: [],
})
export class ShoppingCartModule {}
