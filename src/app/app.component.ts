import { Component } from '@angular/core';
import {isMobile} from "./app-routing.module";
import {getCurrentUser, setCurrentUser} from "./Bloc/Signer/SignInHelper";


export var printer = console.log;

export interface IAppBrowserStorage{
  key:string;
  value:any;
}


export interface AppBrowserStorage{
  TnC:IAppBrowserStorage;
  AssetId:IAppBrowserStorage;
}


export var browserCache:AppBrowserStorage = {
  TnC:{
    key:"tnc",
    value:true
  },
  AssetId:{
    key:"SessionID",
    value:"Session"
  }
}



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'zipzapzwoop';


  constructor() {
    this.SetBrowserCache();


    setCurrentUser();

    if(isMobile()){
      document.documentElement.style.minWidth = "unset";
      document.documentElement.style.overflowX = "hidden";
      // document.documentElement.style.maxWidth = window.innerWidth + "px";
      document.body.style.minWidth = "unset";
      document.body.style.overflowX = "hidden";
      // document.body.style.maxWidth = window.innerWidth + "px";
    }

  }




  async SetBrowserCache(){

  }

}
