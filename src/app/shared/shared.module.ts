import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterLinkActive, RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';


@NgModule({
   imports: [
      FormsModule,
      ReactiveFormsModule,
      RouterLinkActive,
      RouterOutlet,
      RouterModule,
      CommonModule
   ],
   exports: [
      FormsModule,
      ReactiveFormsModule,
      RouterLinkActive,
      RouterOutlet,
      RouterModule,
      CommonModule
   ]
})

export class SharedModule { }
