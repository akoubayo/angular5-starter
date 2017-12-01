import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css','./../side-nav/side-nav.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  public show_menu   :string     = '';
  @Output() open           = new EventEmitter();
  @Input()  open_nav:string;
  ngOnInit() {

  }

  public showMenu() {
      this.show_menu = (this.show_menu) ? '' : 'show-menu';
  }

  public openNav() {
        this.open_nav = (this.open_nav) ? '' : 'open';
        this.open.emit(this.open_nav);
  }
}
