import {Routes, RouterModule} from "@angular/router";
import {HeaderComponent} from "./header/header.component";
import {MycartComponent} from "./mycart/mycart.component";
import {LandingComponent} from "./landing/landing.component";
import {DetailsComponent} from "./details/details.component";

export const AppRoute: Routes = [
{
  path: "",
  component: LandingComponent
},{
  path: "cart",
  component: MycartComponent
},{
  path: "details/:id",
  component: DetailsComponent
}
];