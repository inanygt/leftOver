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
        //* use mockservice in stead of real service
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
    /**
     *
     */
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
});
