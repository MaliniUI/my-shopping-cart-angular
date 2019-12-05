import {Injectable} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import Iitems from '../itemdisplay/items';

@Injectable()
export class SharedService{
  private countSource = new BehaviorSubject(0);
  currentCount = this.countSource.asObservable();

  myItems: Iitems[] = [];
  private cartItems = new BehaviorSubject(this.myItems);
  currentCartItems = this.cartItems.asObservable();

  changeCount(count: number){
    this.countSource.next(count);
  }

  updateCartItems(newItem: Iitems[]){
    debugger;
    this.cartItems.next(newItem);
  }
}
