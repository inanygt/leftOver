import { TestBed } from "@angular/core/testing";
import { LoadingService } from "./loading.service";

describe("loadingService", () => {
  let loadingService: LoadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoadingService],
    });

    loadingService = TestBed.inject(LoadingService);
  });

  it("should create the service", () => {
    expect(loadingService).toBeTruthy();
  });
});
