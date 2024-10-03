import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import { catchError, from, map, Observable, throwError } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  user$: Observable<any>;

  constructor(public auth: AngularFireAuth) {
    this.user$ = this.auth.authState;
  }

  getCurrentUser(): any {
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

  onAuthStateChanged(): void {
    this.auth.onAuthStateChanged((user) => {
      if (user) {
        // User is logged in
        console.log("User logged in:", user);
      } else {
        // User is logged out
        console.log("User not logged in");
      }
    });
  }

  isLoggedIn(): Observable<boolean> {
    return this.auth.authState.pipe(map((user) => !!user));
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
};

type FirebaseError = {
  code: string;
  message: string;
};
