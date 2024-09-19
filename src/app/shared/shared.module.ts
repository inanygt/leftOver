import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterLinkActive, RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
   imports: [
      FormsModule,
      ReactiveFormsModule,
      RouterLinkActive,
      RouterOutlet,
      RouterModule,
      CommonModule,
      NgSelectModule
   ],
   exports: [
      FormsModule,
      ReactiveFormsModule,
      RouterLinkActive,
      RouterOutlet,
      RouterModule,
      CommonModule,
      NgSelectModule
   ]
})

export class SharedModule { }
