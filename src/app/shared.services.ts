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

  private removeItem = new BehaviorSubject(-1);
  removeItemFromCart = this.removeItem.asObservable();

  changeCount(count: number){
    this.countSource.next(count);
  }

  updateCartItems(newItem: Iitems[]){
    this.cartItems.next(newItem);
  }

  removeCartItem(id){
    debugger;
    let cartArr: any[] = this.cartItems.getValue();
    cartArr.forEach((item, index) => {
        if(cartArr[index].id === id) { cartArr.splice(index, 1); }
    });
    this.cartItems.next(cartArr);
  }
}
