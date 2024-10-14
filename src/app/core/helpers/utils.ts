import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class UtilsService {
  generateUniqueId(): string {
    return Math.random().toString(16);
  }

  sum(a: number, b: number): number {
    return a + b;
  }
}
