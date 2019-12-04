import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './header/header.component';
import { ItemdisplayComponent } from './itemdisplay/itemdisplay.component';
import { MycartComponent } from './mycart/mycart.component';
import {AppRoute} from './app.router';
import {RouterModule} from '@angular/router';
import { LandingComponent } from './landing/landing.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule , RouterModule.forRoot(AppRoute)],
  declarations: [ AppComponent, HelloComponent, HeaderComponent, ItemdisplayComponent, MycartComponent, LandingComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
