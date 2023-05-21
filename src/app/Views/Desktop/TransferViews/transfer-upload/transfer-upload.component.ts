import {Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Application} from "../../../../Bloc/Application/Application";
import {printer} from "../../../../app.component";
import {ApplicationHelper, TransferExpiry} from "../../../../Bloc/Application/ApplicationHelper";
import {CreateLinkInfoInput, CreateMailInfoInput, CreateSessionInput} from "../../../../API.service";
import {CreateSession} from "../../../../Bloc/API/SessionApi";
import {getCurrentUser} from "../../../../Bloc/Signer/SignInHelper";
import API, {graphqlOperation} from "@aws-amplify/api-graphql";
import {createSession} from "../../../../../graphql/mutations";
import {StorageHelper} from "../../../../Bloc/StorageHelper/StorageHelper";
import {Emailer} from "../../../../Bloc/Emailer/Emailer";
import {isMobile} from "../../../../app-routing.module";
import {Router} from "@angular/router";

@Component({
  selector: 'transfer-upload',
  templateUrl: './transfer-upload.component.html',
  styleUrls: ['./transfer-upload.component.css']
})
export class TransferUploadComponent extends ApplicationHelper implements OnInit,OnDestroy {


  @ViewChild("cancelContainer") cancelContainer!:ElementRef;
  @ViewChild("cancelAcknowledge") cancelAcknowledge!:ElementRef;
  private countdown: NodeJS.Timeout | any;


  private storageHelper:StorageHelper = new StorageHelper();

  private emailHelper:Emailer = new Emailer();


  get progress(): number {
    let prog =Math.floor((this.storageHelper.TotalProgress/this.storageHelper.totalSize) * 100);

    document.title = `${prog}% - completed. zipzapzwoop -  a simple way to share large file to the world`

    return prog;
    // return this._progress;
  }

  get TotalSize(){
    return this.storageHelper.totalSize;
  }

  get TotalProgress(){
    return this.storageHelper.TotalProgress;
  }

  set progress(value: number) {
    this._progress = value;
  }


  get progressCompleted(){
    return (565.2 * (100 - this.progress) / 100);
  }


  private _progress:number = 565.2;


  constructor(
    private application:Application,
    private router:Router
    ) {
    super();

    // this.progress = 0;
  }

  @HostListener('window:beforeunload', ['$event'])
  beforeunloadHandler(event:BeforeUnloadEvent) {
    event.preventDefault();
    event.returnValue = false;
  }


  ngOnInit(): void {

    printer("Form Values");
    printer(this.appSession.form);

    this.Start();

  }

  ngOnDestroy() {
    clearInterval(this.countdown);
    printer("TransferCompleted Destroyed");
  }


  Cancel(){
    this.cancelContainer.nativeElement.style.display = "none";
    this.cancelAcknowledge.nativeElement.style.display = "flex";
  }

  ResumeTransfer(){
    this.cancelContainer.nativeElement.style.display = "flex";
    this.cancelAcknowledge.nativeElement.style.display = "none";
  }

  DropTransfer(){
    this.cancelContainer.nativeElement.style.display = "flex";
    this.cancelAcknowledge.nativeElement.style.display = "none";
    if(isMobile()){
      this.router.navigateByUrl('/select');
    }
    else{
      this.application.ToggleSelectFilesState();
    }
    window.location.reload();
  }


  async HostTransfer() {
    let transferInfo: CreateMailInfoInput | CreateLinkInfoInput = {
      Bcc: [""],
      Cc: [""],
      id: this.appSession.sessionId,
      FromEmail: this.appSession.form.fromEmail.value,
      Message: this.appSession.form.message as string,
      Recipients: this.appSession.form.recipients,
      Subject: "",
      Title: this.appSession.form.title as string,
    }
    let sessionInput: CreateSessionInput = {
      id: this.appSession.sessionId,
      files: this.appSession.transferFiles.ProcessedS3Object,
      fileSize: String(this.appSession.transferFiles.size),
      shortUrl:this.appSession.sessionLink,
      expiry:TransferExpiry()
    }
    printer("Session Created");
    let res;

    res = await CreateSession(sessionInput, transferInfo,this.appSession);
    printer(res);
    return res;
  }


  private async Start() {
    try{
      let uploadObjects = await this.storageHelper
        .UploadObjects(
          this.appSession.transferFiles.files,
          this.appSession.sessionId
        );

      let res = await this.HostTransfer();
      printer("Session Created");
      printer(res);

      if(isMobile()){
        this.router.navigateByUrl('transfer-sent');
      }else {
        this.application.nextSlide();
      }

    }catch (e:any){
      let {code,message} = e;
      printer(code);
      printer(message);
      printer(e);
      if(isMobile()){
        this.router.navigateByUrl('error');
      }else {
        this.application.ErrorSlide();
      }
    }


  }
}
