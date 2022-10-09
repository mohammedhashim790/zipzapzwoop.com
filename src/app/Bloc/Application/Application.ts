import {AppState} from "./AppState";
import {Injectable} from "@angular/core";
import {printer} from "../app.component";


@Injectable()
export class Application{
  get appState(): AppState {
    return this._appState;
  }

  set appState(state: AppState) {

    if(state == AppState.LINK_SELECT){
    //  Todo
    //  Do the Following for Link Set up
    }

    this._appState = state;
  }
  private _appState:AppState = AppState.MAIL_SELECT;


  locked:boolean = false;


  constructor() {
    this._appState = AppState.MAIL_SELECT;
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

    if(this.locked){
      printer("Locked Instance. Ignoring latest invocation")
      return;
    }



    switch (this.appState){
      case AppState.MAIL_SELECT:
        this.appState = AppState.MAIL_VERIFY;
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

}
