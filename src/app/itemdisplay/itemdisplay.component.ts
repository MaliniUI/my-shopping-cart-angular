import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import itemdetails from '../myinputjsons/itemdetails.json';
import {Iitems} from './itemdisplay/items';

@Component({
  selector: 'app-itemdisplay',
  templateUrl: './itemdisplay.component.html',
  styleUrls: ['./itemdisplay.component.css']
})
export class ItemdisplayComponent implements OnInit {

  @Output()
  addToTheCardItem: EventEmitter<any[]> = new EventEmitter<any[]>();


  myItems: Iitems[] = itemdetails;
  choosenItem: Iitems[];

   addToCart = (event) => {
     debugger;
     let targetID = event.target.attributes.id;
     this.choosenItem = this.myItems
              .find(x => x.id == targetID.value);
     console.log("choosen item ==> "+this.choosenItem);
     this.addToTheCardItem.emit(this.choosenItem);
   }

  constructor() { }

  ngOnInit() {
  }

}