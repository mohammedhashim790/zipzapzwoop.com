import {Component, OnInit, ViewChild} from '@angular/core';
import {ApplicationHelper} from "../../../../Bloc/Application/ApplicationHelper";
import {TooltipDirective} from "../../../../Bloc/Directives/Tooltip/tooltip.directive";
import {Router} from "@angular/router";
import {Application} from "../../../../Bloc/Application/Application";
import {AppState} from 'src/app/Bloc/Application/AppState';
import {FormControl} from "@angular/forms";
import {ENTER} from "@angular/cdk/keycodes";
import {Observable} from "zen-observable-ts";
import {APIService} from "../../../../API.service";
import {printer} from "../../../../app.component";
import {map, startWith} from "rxjs";
import {AppAnimations} from "../../../../Bloc/Application/Constants";
import {getCurrentUser} from "../../../../Bloc/Signer/SignInHelper";

@Component({
  selector: 'app-mtransfer-option-select',
  templateUrl: './mtransfer-option-select.component.html',
  styleUrls: ['./mtransfer-option-select.component.css'],
  animations:AppAnimations
})
export class MTransferOptionSelectComponent extends ApplicationHelper implements OnInit {

  @ViewChild("filesError") filesError!:TooltipDirective;

  AppState = AppState;
  readonly separatorKeysCodes = [ENTER] as const;

  filteredRecipients: Observable<string> | any;
  recipients:Array<string> = [];


  get limit(){
    return this.appSession.transferFiles.FILE_SIZE_LIMIT();
  }

  constructor(
    private router:Router,
    public application:Application,
    private api:APIService
  ) {
    super();

    this.api.ListMailInfos().then((res)=>{
      this.SelectRecipients(res.items);
    });

    application.appState = AppState.MAIL_SELECT;

    printer()

  }

  ngOnInit(): void {
  }

  Submit(){

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


  Next() {
    if(this.FormValid()){
      if(getCurrentUser() == undefined){
        this.router.navigateByUrl('verify')
      }
      else{
        this.router.navigateByUrl('upload')
      }
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

}
