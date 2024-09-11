import { NgModule } from "@angular/core";
import { HeaderComponent } from "./components/header/header.component";
import { MaterialModule } from "../shared/material.module";
import { SharedModule } from "../shared/shared.module";

@NgModule({
   declarations: [HeaderComponent],
   imports: [MaterialModule, SharedModule],
   exports: [HeaderComponent]
})

export class CoreModule { }
