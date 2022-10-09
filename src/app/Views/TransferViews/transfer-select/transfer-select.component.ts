import {Component, OnInit, ViewChild} from '@angular/core';
import {COMMA, ENTER, TAB} from "@angular/cdk/keycodes";
import {MatChipInputEvent} from "@angular/material/chips";
import {FormControl, Validators} from "@angular/forms";
import {empty} from "rxjs";
import {Application} from "../../../Bloc/Application/Application";
import {AppState} from "../../../Bloc/Application/AppState";
import {ApplicationHelper} from "../../../Bloc/Application/ApplicationHelper";
import {Session} from "../../../Bloc/Application/Session";
import {printer} from "../../../app.component";
import {TooltipDirective, TooltipParams} from "../../../Bloc/Directives/Tooltip/tooltip.directive";
import {AppErrors} from "../../../Bloc/Application/AppErrors";
import {getCurrentUser} from "../../../Bloc/Signer/SignInHelper";

@Component({
  selector: 'transfer-select',
  templateUrl: './transfer-select.component.html',
  styleUrls: ['./transfer-select.component.css','./transfer-select.component.scss']
})
export class TransferSelectComponent extends ApplicationHelper implements OnInit {

  @ViewChild("filesError") filesError!:TooltipDirective;
  @ViewChild("emailInput") emailInput!:HTMLElement;


  // recipients: Array<any> = [];
  readonly separatorKeysCodes = [ENTER] as const;

  // files:Array<string> = [];
  AppState = AppState;
  tooltipParams:TooltipParams = {
    tooltipText: "Sign Up to get 1 GB free.",
    tooltipAlign:"top",
  }


  constructor(public application:Application) {
    super();
  }

  ngOnInit(): void {
    if(getCurrentUser() != undefined){
      this.appSession.form.fromEmail.setValue(getCurrentUser()?.getUsername());
      this.appSession.form.fromEmail.disable();
    }
  }

  addToList(recipient: FormControl, recipientError: TooltipDirective) {
    if(recipient.valid) {
      try{
        this.appSession.AddRecipient(recipient.value);
        recipient.setValue("");
      }catch (e:any){
        recipientError.tooltipText = e.message;
        recipientError.Show();
      }
    }
  }

  override validEmail(value:string){
    return super.validEmail(value);
  }

  removeRecipient(index: number) {
    this.appSession.form.recipients.splice(index,1);
  }

  override onFilesSelected(event: Event) {
    try{
      super.onFilesSelected(event);
    }catch (e:any){
      this.tooltipParams = {
        tooltipAlign:"right",
        tooltipText:e.message
      }
      this.filesError.Show();

    }
  }

  override onFolderSelected(event:Event){

    try{
      super.onFolderSelected(event);
    }catch (e:any){
      this.tooltipParams = {
        tooltipAlign:"right",
        tooltipText:e.message
      }
      this.filesError.Show();

    }
  }

  FormValid():boolean{
    if(this.application.appState == AppState.MAIL_SELECT) {
      return (
        this.appSession.transferFiles.files.length > 0 &&
        !this.appSession.form.fromEmail.invalid &&
        (
          this.appSession.form.recipients.length > 0 ||
          this.appSession.form.recipient.valid
        )
      );
    }
    return (
      this.appSession.transferFiles.files.length > 0
    );
  }

  CheckFirst() {
    if(this.application.firstTime && getCurrentUser()==undefined){
      this.tooltipParams = {
        tooltipAlign:"top",
        tooltipText:"Sign Up to get 1 GB free."
      }
      this.filesError.Show();
    }
  }

  next() {
    printer(this.appSession.form);
    if(this.FormValid()){
      printer(this.appSession);
      this.application.nextSlide();
    }
  }
}
