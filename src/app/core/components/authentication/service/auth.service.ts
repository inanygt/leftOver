import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";


import { catchError, from, map, Observable, throwError } from "rxjs";

@Injectable
   ({
      providedIn: 'root'
   })
export class AuthService {
   user$: Observable<any>;

   constructor(public auth: AngularFireAuth) {
      this.user$ = this.auth.authState;
   }

   isLoggedIn(): Observable<boolean> {
      return this.auth.authState.pipe(
         map(user => !!user)
      )
   }

   getCurrentUser(): any {
      // Return the currently signed-in user (or null if not signed in)
      return this.auth.currentUser;
   }

   login(email: string, password: string): Observable<any> {
      return from(this.auth.signInWithEmailAndPassword(email, password)).pipe(
         catchError((error: FirebaseError) =>
            throwError(() => new Error(this.translateFirebaseErrorMessage(error)))
         )
      );
   }

   register(email: string, password: string): Observable<any> {
      return from(this.auth.createUserWithEmailAndPassword(email, password));
   }

   logout(): Observable<void> {
      return from(this.auth.signOut());
   }

   recoverPassword(email: string): Observable<void> {
      return from(this.auth.sendPasswordResetEmail(email)).pipe(
         catchError((error: FirebaseError) =>
            throwError(() => new Error(this.translateFirebaseErrorMessage(error)))
         )
      );
   }

   private translateFirebaseErrorMessage({ code, message }: FirebaseError) {
      if (code === "auth/user-not-found") {
         return "User not found.";
      }
      if (code === "auth/wrong-password") {
         return "User not found.";
      }
      return message;
   }

}

type SignIn = {
   email: string;
   password: string;
}

type FirebaseError = {
   code: string;
   message: string
};

