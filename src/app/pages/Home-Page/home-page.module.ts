import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CardModule } from "../../components/card/card.module";
import { HomePageComponent } from "./home-page.component";
import { HomePageRoutingModule } from "./home-page.routing.module";

@NgModule({
  imports: [
    CommonModule,
    CardModule,
    HomePageRoutingModule
  ],
  exports: [
    HomePageComponent
  ],
  declarations: [
    HomePageComponent
  ]
})

export class HomePageModule { }
