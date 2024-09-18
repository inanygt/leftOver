import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterLinkActive, RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { NgLabelTemplateDirective, NgOptionTemplateDirective, NgSelectComponent } from '@ng-select/ng-select';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
   imports: [
      FormsModule,
      ReactiveFormsModule,
      RouterLinkActive,
      RouterOutlet,
      RouterModule,
      CommonModule,
      NgLabelTemplateDirective,
      NgOptionTemplateDirective,
      NgSelectComponent,
      NgSelectModule
   ],
   exports: [
      FormsModule,
      ReactiveFormsModule,
      RouterLinkActive,
      RouterOutlet,
      RouterModule,
      CommonModule,
      NgLabelTemplateDirective,
      NgOptionTemplateDirective,
      NgSelectComponent,
      NgSelectModule
   ]
})

export class SharedModule { }
