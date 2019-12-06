import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.services';
import Iitems from '../itemdisplay/items';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.css']
})
export class MycartComponent implements OnInit {

  cartItemList: Iitems[] = [];
  totalAmount : number = 0;
  updatedItem: number = 0;
  curCount: number =0;
  countChanged: number = 0;

  constructor(private cartItems: SharedService, private currentCount: SharedService) { }

  ngOnInit() {
    this.cartItems.cartItems.subscribe(item => this.cartItemList = item);
    this.currentCount.currentCount.subscribe(item => this.curCount = item);

     debugger;
    for(let item of this.cartItemList){ 
      this.totalAmount += (parseFloat(item.quantity) * parseInt(item.cost)) ;
    }
    console.log("Total ==> "+ this.totalAmount);
   
  }

  updateItemQuantity($event, id){
    debugger;
    this.totalAmount = 0;
    this.countChanged = 0;
    for(let r of this.cartItemList){
     this.countChanged += parseInt(r.quantity);
     this.totalAmount += parseInt(r.quantity) * parseInt(r.cost);
    }
    this.currentCount.changeCount(this.countChanged);
  }

  decreaseItemQuantity(obj){
    debugger;

  }

  increaseItemQuantity(obj){
    debugger;
  }


}