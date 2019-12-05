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

  constructor(private cartItems: SharedService) { }

  ngOnInit() {
    this.cartItems.cartItems.subscribe(item => this.cartItemList = item);
    debugger;
  }


}