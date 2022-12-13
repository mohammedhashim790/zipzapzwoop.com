import { Component, OnInit } from '@angular/core';
import {ApplicationHelper} from "../../../Bloc/Application/ApplicationHelper";
import {Application} from "../../../Bloc/Application/Application";
import {AppState} from "../../../Bloc/Application/AppState";
import {printer} from "../../../app.component";
import {getCurrentUser, SignIn, SignOut} from "../../../Bloc/Signer/SignInHelper";
import {Router} from "@angular/router";

@Component({
  selector: 'app-mhome',
  templateUrl: './mhome.component.html',
  styleUrls: ['./mhome.component.css']
})
export class MHomeComponent extends ApplicationHelper implements OnInit {
  AppState = AppState;
  get UserName(){
    if(getCurrentUser() == undefined){
      return undefined;
    }
    return (getCurrentUser() as any).attributes.name;
  }

  get isHome(){
    printer(this.router.url);
    return this.router.url == '/';
  }

  constructor(
    public application:Application,
    private router:Router
  ) {
    super();

    printer(AppState[this.application.appState]);

  }

  ngOnInit(): void {
  }

  SignOut() {
    SignOut();
  }

  SignIn() {
    this.router.navigateByUrl('auth')
  }

  OpenUrl(url: string) {
    window.open(url,"_blank");
  }
}
