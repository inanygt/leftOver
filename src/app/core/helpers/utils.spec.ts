import { TestBed } from "@angular/core/testing";
import { UtilsService } from "./utils";

describe("utils", () => {
  let utilsService: UtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UtilsService],
    });

    utilsService = TestBed.inject(UtilsService);
  });

  it("should generate unique id", () => {
    const id1 = utilsService.generateUniqueId();
    const id2 = utilsService.generateUniqueId();

    expect(typeof id1).toBe("string");
    expect(typeof id2).toBe("string");

    expect(id1).not.toBe(id2);
  });

  it("should add 2 numbers", () => {
    expect(utilsService.sum(1, 2)).toBe(3);
  });
});
