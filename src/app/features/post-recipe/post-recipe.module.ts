import { NgModule } from "@angular/core";
import { PostComponent } from "./components/post/post.component";
import { MaterialModule } from "../../shared/material.module";

@NgModule({
   declarations: [PostComponent],
   imports: [MaterialModule]
})

export class PostRecipeModule { }
