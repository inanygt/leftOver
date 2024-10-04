import { Injectable, OnInit } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from "@angular/fire/compat/firestore";
import { map, Observable } from "rxjs";
import { firestoreRecipe } from "../../../types/recipe.interface";
import { SnackBarService } from "./snackbar.service";

@Injectable({
  providedIn: "root",
})
export class FirebaseStoreService {
  public recipesCollection: AngularFirestoreCollection<any>;

  constructor(
    public fireStore: AngularFirestore,
    private snackbar: SnackBarService
  ) {
    this.recipesCollection =
      this.fireStore.collection<firestoreRecipe>("recipes");
  }

  getRecipesByUid(uid: string): Observable<firestoreRecipe[]> {
    return this.recipesCollection.snapshotChanges().pipe(
      map((actions) => {
        return actions.map((a) => {
          const data = a.payload.doc.data() as firestoreRecipe;
          const id = a.payload.doc.id;
          return { ...data, id };
        });
      })
    );
  }

  saveRecipe(firestoreRecipe: firestoreRecipe): void {
    // Define the field you want to check for uniqueness (e.g., recipe name)
    const recipeNameToCheck = firestoreRecipe.name;

    // Query Firestore to check if a recipe with the same name already exists
    this.recipesCollection.ref
      .where("name", "==", recipeNameToCheck)
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.empty) {
          // No existing recipe found, proceed to add the new recipe
          this.recipesCollection
            .add(firestoreRecipe)
            .then(() => {
              this.snackbar.showMessage("Recipe saved!", "🍎");
            })
            .catch((error) => {
              console.log("Error adding recipe:", error);
            });
        } else {
          this.snackbar.showMessage("Recipe allready saved!", "🧑‍🍳");
        }
      })
      .catch((error) => {
        console.log("Error checking recipe existence:", error);
      });
  }

  onDeleteRecipe(id: string): void {
    this.recipesCollection
      .doc(id)
      .delete()
      .then(() => {
        this.snackbar.showMessage("Deleted recipe", "🍽️");
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
