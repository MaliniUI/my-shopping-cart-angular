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
   tempItem: Iitems[] = [];

  constructor(private countUpdate: SharedService, private cartItemUpdated: SharedService) { }

  ngOnInit() {
    this.countUpdate.currentCount.subscribe(count => this.updateCartCount = count);
    this.cartItemUpdated.currentCartItems.subscribe(item => this.toBeInserted = item);
  }

itemToBeAddedToCart(data: Iitems[]): void{
      debugger;
      if(null != data && undefined != data){
        this.tempItem = this.toBeInserted.find(x => x.id == data.id);
        if(this.tempItem != null && this.tempItem != undefined ){
          this.tempItem.quantity = parseInt(this.tempItem.quantity) + 1;
        }else{
          this.toBeInserted.push(data);
        }
        this.updateCartCount = this.updateCartCount + 1;
        this.countUpdate.changeCount(this.updateCartCount);
        this.cartItemUpdated.updateCartItems(this.toBeInserted);
        console.log("cart items ==> "+this.toBeInserted);
      }       
    }

}