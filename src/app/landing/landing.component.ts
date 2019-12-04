import { Component, OnInit, Input } from '@angular/core';
import Iitems from '../itemdisplay/items';
import {HeaderComponent} from '../header/header.component';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  @Input()
  updateCartCount: number = 0;

   toBeInserted: Iitems[] = [];

  constructor() { }

  ngOnInit() {
  }

itemToBeAddedToCart(data: any[]): void{
    debugger;
      this.toBeInserted.push(data);
      HeaderComponent.cartCount = this.toBeInserted.length;
      this.updateCartCount = this.toBeInserted.length;
      console.log("cart items ==> "+this.toBeInserted);
    }

}