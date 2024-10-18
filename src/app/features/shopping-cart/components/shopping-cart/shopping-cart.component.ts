import { Component, OnInit } from "@angular/core";
import { ShoppingCartService } from "../../services/shopping-cart.service";
import { map, Observable, switchMap } from "rxjs";
import { AuthService } from "../../../../core/components/authentication/service/auth.service";
import { ShoppingListItem } from "../../models/shoppingListItem.interface";
import { FirebaseStoreService } from "../../../../core/components/authentication/service/firebase-store.service";

@Component({
  selector: "app-shopping-cart",
  templateUrl: "./shopping-cart.component.html",
  styleUrl: "./shopping-cart.component.scss",
})
export class ShoppingCartComponent {
  currentUserUid$: Observable<string>;
  shoppingCartItems$: Observable<ShoppingListItem[]>;

  constructor(
    private shopping: ShoppingCartService,
    public authService: AuthService,
    public fireStore: FirebaseStoreService
  ) {
    this.currentUserUid$ = this.authService.user$.pipe(map((user) => user.uid));
    this.shoppingCartItems$ = this.currentUserUid$.pipe(
      switchMap((uid) => this.shopping.getShoppingCartItems(uid))
    );
  }
}
