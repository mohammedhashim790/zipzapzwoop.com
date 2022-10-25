import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {COMMA, ENTER, TAB} from "@angular/cdk/keycodes";
import {MatChipInputEvent} from "@angular/material/chips";
import {FormControl, Validators} from "@angular/forms";
import {empty, map, startWith} from "rxjs";
import {Application} from "../../../../Bloc/Application/Application";
import {AppState} from "../../../../Bloc/Application/AppState";
import {ApplicationHelper} from "../../../../Bloc/Application/ApplicationHelper";
import {Session} from "../../../../Bloc/Application/Session";
import {printer} from "../../../../app.component";
import {TooltipDirective, TooltipParams} from "../../../../Bloc/Directives/Tooltip/tooltip.directive";
import {AppErrors} from "../../../../Bloc/Application/AppErrors";
import {getCurrentUser} from "../../../../Bloc/Signer/SignInHelper";
import {APIService, CreateLinkInfoInput, CreateMailInfoInput, CreateSessionInput} from "../../../../API.service";
import {CreateSession} from "../../../../Bloc/API/SessionApi";
import {MailInfo} from "../../../../../models";
import {Observable} from "zen-observable-ts";
import {AppAnimations} from "../../../../Bloc/Application/Constants";
import {title} from "process";

@Component({
  selector: 'transfer-select',
  templateUrl: './transfer-select.component.html',
  styleUrls: ['./transfer-select.component.css','./transfer-select.component.scss'],
  animations:AppAnimations
})
export class TransferSelectComponent extends ApplicationHelper implements OnInit {

  @ViewChild("filesError") filesError!:TooltipDirective;
  @ViewChild("emailInput") emailInput!:HTMLElement;

  recipients:Array<string> = [];


  // recipients: Array<any> = [];
  readonly separatorKeysCodes = [ENTER] as const;

  // files:Array<string> = [];
  AppState = AppState;
  tooltipParams:TooltipParams = {
    tooltipText: "Sign Up and get 1 GB free.",
    tooltipAlign:"top",
  }
  filteredRecipients: Observable<string> | any;




  constructor(
    public application:Application,
    private api:APIService
  ) {
    super();

    this.api.ListMailInfos().then((res)=>{
      this.SelectRecipients(res.items);
    }).catch((err)=>{
      printer("error");
      printer(err);
    });

  }

  ngOnInit(): void {

    document.title = "zipzapzwoop -  a simple way to share large file to the world";

    if(getCurrentUser() != undefined){
      this.appSession.form.fromEmail.setValue(((getCurrentUser() as any).attributes.email));
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
        tooltipText:"Sign Up and get 1 GB free."
      }
      this.filesError.Show();
    }
  }

  async next() {

    printer(this.appSession.transferFiles)
    if (this.FormValid()) {
      this.application.nextSlide();
    }
  }

  TestFunction(){
    this.api.ListMailInfos().then((res)=>{
      this.SelectRecipients(res.items);
    });
  }

  SelectRecipients(recipients: Array<any>){

    for(let recipient of recipients){
      this.recipients.push(recipient.Recipients);
    }
    this.recipients = this.recipients.flat();

    this.recipients = this.recipients.filter((value,index,self)=> self.indexOf(value) == index);

    printer("Recipient List");
    printer(this.recipients);

    this.filteredRecipients = this.appSession.form.recipient.valueChanges.pipe(
      startWith(''),
      map(value => this.filterRecipients(value || '')),
    );

  }

  private filterRecipients(value: string){
    const filterValue = this._normalizeValue(value);
    return this.recipients.filter(recipient => this._normalizeValue(recipient).includes(filterValue));
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }


}
