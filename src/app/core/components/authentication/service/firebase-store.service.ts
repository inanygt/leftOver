import { Injectable, OnInit } from "@angular/core";
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/compat/firestore";
import { map, Observable } from "rxjs";
import { firestoreRecipe } from "../../../types/recipe.interface";

@Injectable({
   providedIn: 'root'
})

export class FirebaseStoreService {
   private recipesCollection: AngularFirestoreCollection<any>;

   constructor(public fireStore: AngularFirestore) {
      this.recipesCollection = this.fireStore.collection<firestoreRecipe>('recipes');
   }

   getRecipesByUid(uid: string): Observable<firestoreRecipe[]> {
      return this.recipesCollection.valueChanges()
   }

   saveRecipe(firestoreRecipe: firestoreRecipe) {
      this.recipesCollection.add(firestoreRecipe)
   }

   // Delete a recipe by its ID
   // deleteRecipe(id: string): Promise<void> {
   //    return this.recipesCollection.doc(id).delete();
   // }
}
