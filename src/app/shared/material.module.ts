import { NgModule } from "@angular/core";

import { MatMenuModule } from "@angular/material/menu";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatDividerModule } from "@angular/material/divider";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { MatSelectModule } from "@angular/material/select";
import {
  MatButtonToggle,
  MatButtonToggleModule,
} from "@angular/material/button-toggle";
import { MatCardModule } from "@angular/material/card";
import { MatChipsModule } from "@angular/material/chips";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatAutocompleteModule } from "@angular/material/autocomplete";

@NgModule({
  declarations: [],
  imports: [
    MatMenuModule,
    MatExpansionModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatDialogModule,
    MatSelectModule,
    MatButtonToggle,
    MatButtonToggleModule,
    MatCardModule,
    MatChipsModule,
    MatToolbarModule,
    MatSnackBarModule,
  ],
  exports: [
    MatMenuModule,
    MatExpansionModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatDialogModule,
    MatSelectModule,
    MatButtonToggle,
    MatButtonToggleModule,
    MatCardModule,
    MatChipsModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatAutocompleteModule,
  ],
})
export class MaterialModule {}
