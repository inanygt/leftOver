import { TestBed } from "@angular/core/testing";
import { IngredientsService } from "./ingredients.service";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { UtilsService } from "../../../core/helpers/utils";

describe("ingredients service", () => {
  let ingredientsService: IngredientsService;
  const utilsServiceMock = {
    generateUniqueId: jest.fn(),
  };
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        IngredientsService,

        {
          provide: UtilsService,
          useValue: utilsServiceMock,
        },
      ],
    });

    ingredientsService = TestBed.inject(IngredientsService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it("should create service", () => {
    expect(ingredientsService).toBeTruthy();
  });

  it("should add an ingredient", () => {
    utilsServiceMock.generateUniqueId.mockReturnValue("mocked-id");
    ingredientsService.addIngredient("ingredient");

    expect(ingredientsService.ingredients$.getValue()).toEqual([
      {
        id: "mocked-id",
        text: "ingredient",
      },
    ]);
  });

  it("should delete an ingredient", () => {
    ingredientsService.ingredients$.next([
      {
        id: "1",
        text: "test",
      },
    ]);

    ingredientsService.deleteIngredient("1");
    expect(ingredientsService.ingredients$.getValue()).toEqual([]);
  });

  it("should not delete any ingredient if id doesn't exist", () => {
    ingredientsService.ingredients$.next([
      {
        id: "1",
        text: "test",
      },
    ]);
    ingredientsService.deleteIngredient("2");
    expect(ingredientsService.ingredients$.getValue()).toEqual([
      {
        id: "1",
        text: "test",
      },
    ]);
  });

  describe("get ingredient information", () => {
    it("should return ingredient information", () => {
      let ingredient: any;
      ingredientsService.getIngredientInformation("1").subscribe((response) => {
        ingredient = response;
      });
      const req = httpTestingController.expectOne(
        "https://api.spoonacular.com/food/ingredients/1/information?apiKey=f7b667c5b33b40dcbb0f44cd03ab8b67&amount=1"
      );

      req.flush({
        id: "1",
        text: "test",
      });

      expect(ingredient).toEqual({
        id: "1",
        text: "test",
      });
    });
  });
});
