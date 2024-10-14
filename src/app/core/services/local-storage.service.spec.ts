import { TestBed } from "@angular/core/testing";
import { LocalStorageService } from "./local-storage";

describe("localstorage service", () => {
  let localStorageService: LocalStorageService;
  const localStorageMock = {
    getRecipes: jest.fn,
    setRecipes: jest.fn,
    clearRecipes: jest.fn,
    getIngredients: jest.fn,
    setIngredients: jest.fn,
    clearIngredients: jest.fn,
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: LocalStorageService, useValue: localStorageMock }],
    });
  });

  xit("should create a service", () => {
    // expect(localStorageService).toBeTruthy();
  });
});
