import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { DialogModule } from "src/app/components/dialog/dialog.module";
import { CrudPageComponent } from "./crud-page.component";
import { CrudPageRoutingModule } from "./crud-page.routing.module";

@NgModule({
  imports: [
    CommonModule,
    CrudPageRoutingModule,
    DialogModule
  ],
  exports: [
    CrudPageComponent
  ],
  declarations: [
    CrudPageComponent
  ]
})

export class CrudPageModule {}
