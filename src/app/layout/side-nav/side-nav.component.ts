import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SideNav }           from './side-nav'

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

    @Input()  open_nav:string;
    @Output() open           = new EventEmitter();

    public    open_drop_down = '';
    public    open_drop_down2 = '';

    public    menu:any;
    public    menu2:any;
    constructor() { }

    ngOnInit() {

      this.menu = {};
      this.menu2 = new SideNav(this.menu).menu;
      console.log(this.menu2)
    }

    public openNav() {
        this.open_nav = (this.open_nav) ? '' : 'open';
        this.open.emit(this.open_nav);
    }

    public openDropDown() {
      this.open_drop_down = (this.open_drop_down) ? '' : 'open display-block';
    }

     public openDropDown2() {
      this.open_drop_down2 = (this.open_drop_down2) ? '' : 'open display-block';
    }
}
