import {AppState} from "./AppState";
import {Injectable} from "@angular/core";
import {browserCache, printer} from "../../app.component";
import {Session} from "./Session";
import {getCurrentUser} from "../Signer/SignInHelper";


@Injectable()
export class Application{
  get firstTime(): boolean {
    return this._firstTime;
  }

  set firstTime(value: boolean) {
    this._firstTime = value;
  }
  private _firstTime:boolean = !window.sessionStorage.getItem(browserCache.TnC.key);


  private session = Session.GetInstance();


  get appState(): AppState {
    return this._appState;
  }

  set appState(state: AppState) {
    if(state == AppState.LINK_SELECT){
    //  Todo
      printer("AppSession Set to link transfer")
      this.session.linkTransfer = true;
    }else if(state == AppState.MAIL_SELECT){
      this.session.linkTransfer = false;
    }

    this._appState = state;
  }
  private _appState:AppState = AppState.MAIL_SELECT;


  private locked:boolean = false;


  constructor() {
    this.appState = AppState.MAIL_SELECT;
  }


  ToggleSelectFilesState(){
    if(this.appState == AppState.MAIL_SELECT){
      this.appState = AppState.LINK_SELECT;
    }else{
      this.appState = AppState.MAIL_SELECT;
    }
  }

  nextSlide(){

    printer(AppState[this.appState]);

    // if(this.locked){
    //   printer("Locked Instance. Ignoring latest invocation")
    //   return;
    // }
    switch (this.appState){
      case AppState.MAIL_SELECT:
        if(getCurrentUser() == undefined)
          this.appState = AppState.MAIL_VERIFY;
        else
          this.appState = AppState.UPLOAD;

        break;

      case AppState.LINK_SELECT:
      case AppState.MAIL_VERIFY:
        this.appState = AppState.UPLOAD;
        break;

      case AppState.UPLOAD:
        this.appState = AppState.TRANSFER_SENT;
        break;

      default:
        this.appState = AppState.ERROR;

    }

    this.locked = true;
    setTimeout(()=>{
      this.locked = false;
    },3000);

    printer(AppState[this.appState]);


  }

  ErrorSlide() {
    this.appState = AppState.ERROR;
  }

  DownloadSlide() {
    this.appState = AppState.TRANSFER_DOWNLOAD;
  }
}
