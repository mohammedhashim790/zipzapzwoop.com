import {Component, HostListener} from '@angular/core';
import {isMobile} from "./app-routing.module";
import {getCurrentUser, setCurrentUser} from "./Bloc/Signer/SignInHelper";
import {Session} from "./Bloc/Application/Session";
import {AWSError, Lambda} from "aws-sdk";
import {aws_exports} from "../aws-exports";
import {AppAnimations, z3Session} from "./Bloc/Application/Constants";
import ShortUniqueId from "short-unique-id";


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
  styleUrls: ['./app.component.css'],
  animations:AppAnimations,
})
export class AppComponent {
  title = 'zipzapzwoop -  a simple way to share large file to the world';

  private session:Session = Session.GetInstance();
  // private awsLambda: Lambda;
  ShowTnC: boolean = false;

  constructor() {

    this.SetBrowserCache();


    setCurrentUser()
      .then((res)=>{
        this.session.form.fromEmail.setValue((res as any).attributes.email);
    });

    if(isMobile()){
      document.documentElement.style.minWidth = "unset";
      document.documentElement.style.overflowX = "hidden";
      // document.documentElement.style.maxWidth = window.innerWidth + "px";
      document.body.style.minWidth = "unset";
      document.body.style.overflowX = "hidden";
      document.body.style.background = "#f0f0f0";

      // document.body.style.maxWidth = window.innerWidth + "px";
    }

  }




  async SetBrowserCache(){
    let firstTime = window.localStorage.getItem(z3Session);
    if(!firstTime){
      printer("This is first time");
      this.ShowTnC = true;
    }


  }

  Accepted() {
    window.localStorage.setItem(z3Session,new ShortUniqueId()());
    this.ShowTnC = false;
  }
}
