import { Component, OnInit, Input } from '@angular/core';
import Iitems from '../itemdisplay/items';
import { SharedService } from '../shared.services';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  updateCartCount: number = 0;

   toBeInserted: Iitems[] = [];

  constructor(private countUpdate: SharedService, private cartItemUpdated: SharedService) { }

  ngOnInit() {
    this.countUpdate.currentCount.subscribe(count => this.updateCartCount = count);
    this.cartItemUpdated.currentCartItems.subscribe(item => this.toBeInserted = item);
  }

itemToBeAddedToCart(data: any[]): void{
    debugger;
      this.toBeInserted.push(data);
      this.updateCartCount = this.toBeInserted.length;
       this.countUpdate.changeCount(this.updateCartCount);
       this.cartItemUpdated.updateCartItems(this.toBeInserted);
      console.log("cart items ==> "+this.toBeInserted);
    }

}