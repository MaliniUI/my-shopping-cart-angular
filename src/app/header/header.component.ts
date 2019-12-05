import { Component, OnInit } from '@angular/core';
import Iitems from '../itemdisplay/items';
import {SharedService} from '../shared.services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

 cartCount: number = 0;

  constructor(private updateCount: SharedService) { }

  ngOnInit() {
    this.updateCount.currentCount.subscribe(count => this.cartCount = count);
  }

  
}