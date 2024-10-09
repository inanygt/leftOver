import { TestBed } from "@angular/core/testing";
import { SnackBarService } from "./snackbar.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

describe("snackbarService", () => {
  let snackbarService: SnackBarService;
  let matSnackbar: MatSnackBar;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule],
      providers: [SnackBarService],
    });
    snackbarService = TestBed.inject(SnackBarService);
    matSnackbar = TestBed.inject(MatSnackBar);
  });

  it("should create a service", () => {
    expect(snackbarService).toBeTruthy();
  });

  describe("show message", () => {
    it("should show a message with matsnakbar", () => {
      const message = "hello";
      const action = "close";
      const duration = 4000;

      const spy = jest.spyOn(matSnackbar, "open");

      snackbarService.showMessage(message, action, duration);

      expect(spy).toHaveBeenCalledWith(message, action, {
        duration: duration,
      });
    });
  });
});
