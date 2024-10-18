import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ShoppingListItem } from "../models/shoppingListItem.interface";
import { catchError, map, Observable, of } from "rxjs";
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from "@angular/fire/compat/firestore";
import { SnackBarService } from "../../../core/components/authentication/service/snackbar.service";

@Injectable({
  providedIn: "root",
})
export class ShoppingCartService {
  public shoppingCartCollection: AngularFirestoreCollection<any>;

  constructor(
    private http: HttpClient,
    public fireStore: AngularFirestore,
    private snackbar: SnackBarService
  ) {
    this.shoppingCartCollection =
      this.fireStore.collection<ShoppingListItem>("ingredients");
  }

  getShoppingCartItems(uid: string): Observable<ShoppingListItem[]> {
    return this.shoppingCartCollection.snapshotChanges().pipe(
      map((actions) => {
        return actions.map((a) => {
          const data = a.payload.doc.data() as ShoppingListItem;
          const id = a.payload.doc.id;
          return { ...data, id };
        });
      })
    );
  }

  saveToShoppingCart(item: ShoppingListItem): void {
    // Define the field you want to check for uniqueness (e.g., recipe name)
    const itemNameToCheck = item.item;

    // Query Firestore to check if a recipe with the same name already exists
    this.shoppingCartCollection.ref
      .where("name", "==", itemNameToCheck)
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.empty) {
          // No existing recipe found, proceed to add the new recipe
          this.shoppingCartCollection
            .add(item)
            .then(() => {
              this.snackbar.showMessage("Added to your Shopping cart!", "🍎");
            })
            .catch((error) => {
              console.log("Error adding to shopping cart:", error);
            });
        } else {
          this.snackbar.showMessage("item allready saved!", "🧑‍🍳");
        }
      })
      .catch((error) => {
        console.log("Error checking ingredient existence:", error);
      });
  }
}
