import {Component, Input, OnInit} from '@angular/core';
import {AppAnimations} from "../../../Bloc/Application/Constants";
import {printer} from "../../../app.component";

@Component({
  selector: 'navigation-drawer',
  templateUrl: './navigation-drawer.component.html',
  styleUrls: ['./navigation-drawer.component.css'],
  animations:AppAnimations
})
export class NavigationDrawerComponent implements OnInit {
  get show(): boolean {
    return this._show;
  }

  set show(value: boolean) {
    this._show = value;
  }


  @Input() showOnStart:boolean = false;


  private _show:boolean = false;
  constructor() {

  }

  ngOnInit(): void {
    printer("Show ONstart");
    printer(this.showOnStart);
    if(this.showOnStart){
      this.open();
    }
  }

  Open(){
    this.open();
  }

  private open(){
    this.show = true;
  }

  Close(){
    this.close();
  }
  private close(){
    this.show = false;
  }

}
