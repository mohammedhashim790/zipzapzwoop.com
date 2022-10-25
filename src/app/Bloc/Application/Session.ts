import {printer} from "../../app.component";
import {FormControl, Validators} from "@angular/forms";
import ShortUniqueId from "short-unique-id";

import {v4 as uuidv4} from 'uuid';
import {TransferConstants, TransferFiles} from "./TransferFiles";
import {getCurrentUser} from "../Signer/SignInHelper";
import {Errors, RecipientPlan} from "./Constants";
import {AppErrors} from "./AppErrors";


export interface SessionParams{
  fromEmail:FormControl;
  recipient:FormControl;
  recipients:Array<string>;
  title?:string;
  message?:string;
}



export class Session{
  private static _instance:Session = Session.GetInstance();

  public transferFiles:TransferFiles = new TransferFiles();

  public form:SessionParams;

  public linkTransfer:boolean = false;

  public sessionLink:string;

  public sessionId:string;

  constructor() {
    this.transferFiles = new TransferFiles();
    this.form = {
      fromEmail:new FormControl('',[Validators.required,Validators.email]),
      recipient:new FormControl('',[Validators.required,Validators.email]),
      recipients:[],
      title:'',
      message:''
    }
    this.sessionLink = new ShortUniqueId({length:10})();
    this.sessionId = uuidv4();
  }

  public static GetInstance(){
    if(!Session._instance){
      Session._instance = new Session();
    }
    return Session._instance;
  }


  public static NewSession(){
    Session._instance = new Session();
  }

  AddToFiles(files: any){

    if(files instanceof FileList)
      files = Array.from(files);
    printer(files);

    if(this.transferFiles.files.length == 0)
      this.form.title = (files[0].name.split(".").length>1)?files[0].name.split(".")[0]:files[0].name;

    this.transferFiles.push(files);

    printer(this.transferFiles.files);

  }

  Remove(index:number){
    this.transferFiles.Remove(index);
  }



  AddRecipient(recipient:string){
    if(this.form.recipients.indexOf(recipient)!=-1){
      throw new AppErrors(Errors.DUPLICATE_RECIPIENT_FOUND,
        `Ohoo.. Duplicate recipients found in the list. Try again.`)
    }
    if(this.form.recipients.length>=TransferConstants.MAX_RECIPIENTS_COUNT()){
      throw new AppErrors(Errors.MAX_RECIPIENT_COUNT,
         `Dear Sender,
         With the specified plan you could send only to ${TransferConstants.MAX_RECIPIENTS_COUNT()} recipients.
         Upgrade to premium version to send upto 25 Recipients.`)
    }else{
      this.form.recipients.push(recipient);

    }
  }



}
