import { Component, OnInit } from '@angular/core';
import Iitems from '../itemdisplay/items';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

 cartCount: number = 0;

  constructor() { }

  ngOnInit() {
  }

  
}