import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {printer} from "../../../../app.component";
import API from "@aws-amplify/api-graphql";
import {getSession} from "../../../../../graphql/queries";
import {APIService, GetSessionQuery} from "../../../../API.service";
import {ApplicationHelper} from "../../../../Bloc/Application/ApplicationHelper";
import {Application} from "../../../../Bloc/Application/Application";
import {AppErrors} from "../../../../Bloc/Application/AppErrors";
import {Errors} from "../../../../Bloc/Application/Constants";
import {environment} from "../../../../../environments/environment";
import {StorageHelper} from "../../../../Bloc/StorageHelper/StorageHelper";
import {isMobile} from "../../../../app-routing.module";
import {AppState} from "../../../../Bloc/Application/AppState";


export interface DownloadParams{
  id:string;
  redirect?:boolean;
  notify?:boolean;
}

@Component({
  selector: 'transfer-download',
  templateUrl: './transfer-download.component.html',
  styleUrls: ['./transfer-download.component.css']
})
export class TransferDownloadComponent extends ApplicationHelper implements OnInit {
  private downloadParams: DownloadParams;
  public sessionData!: GetSessionQuery;


  private isLink:boolean = false;
  public error: Errors | undefined;
  Errors = Errors;

  get title(){
    if(this.isLink){
      return this.sessionData.linkInfo?.Title ?? '';
    }
    return this.sessionData.mailInfo?.Title ?? '';
  }

  get Message(){
    if(this.isLink){
      return this.sessionData.linkInfo?.Message ?? '';
    }
    return this.sessionData.mailInfo?.Message ?? '';
  }

  get Files(){
    return this.sessionData.files?.slice(0,5);
  }

  constructor(
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private api:APIService,
    private application:Application
  ) {
    super();

    this.downloadParams = <DownloadParams>this.activatedRoute.snapshot.queryParams;

    printer("Download Params");
    printer(this.downloadParams);

    // this.downloadParams.redirect = this.activatedRoute.snapshot.queryParamMap.get("redirect") == "true";
    this.readSession();

  }

  ngOnInit(): void {
  }

  private async readSession() {
    try{
      let response = await (API.graphql({
        query: getSession,
        variables: {
          id: this.downloadParams.id,
        },
        authMode: "API_KEY"
      }) as any);
      response = <GetSessionQuery>response.data.getSession;

      if(response == null){
        throw new AppErrors(Errors.TRANSFER_NOT_AVAILABLE,"Transfer is not found");
      }
      printer("Session By id " + this.downloadParams.id)
      printer(response);

      this.checkExpiry(response);


      this.isLink = (this.sessionData?.sessionMailInfoId == undefined && this.sessionData?.sessionMailInfoId == null);

      this.sessionData = response;

      this.error = Errors.OK;


    }catch (e:any){
      const {errorCode,message } = e;
      printer(errorCode);
      printer(message);
      if(errorCode == Errors.TRANSFER_EXPIRED || errorCode == Errors.TRANSFER_NOT_AVAILABLE){
      //  TRANSFER HAS EXPIRED
        this.error = errorCode;
      }
      else {
        this.application.ErrorSlide();
      }
    }
  }

  private checkExpiry(response: GetSessionQuery){
    if(response.expiry!=0 && response.expiry!=undefined &&  this.isExpired(response.expiry))
      throw new AppErrors(Errors.TRANSFER_EXPIRED,"Transfer Expired Exception")
  }

  private isExpired(expiry: number) {
    let currentDate = new Date();
    expiry*=1000;
    let expiryDate = new Date(expiry);
    printer(currentDate <= expiryDate);
    return !(currentDate <= expiryDate);
  }


  public DownloadTransfer(){
    try{
      let id = this.sessionData.id;
      if(this.sessionData.files!.length>1) {
        printer("Now Downloading");
        printer(environment.downloadUrl + "/" + id);
        let element = document.createElement("a");
        element.href = environment.downloadUrl + "/" + id;
        element.target = "_self";
        element.click();
        element.remove();
      }else{
        let storageHelper = new StorageHelper();
        let element = document.createElement("a");
        let file = this.sessionData!.files![0];
        printer(storageHelper.getEmbeddedURL(id, file!.key));
        element.href = storageHelper.getEmbeddedURL(id, file!.key);
        element.download = file!.key;
        element.target = "_self";
        element.click();
      }


    }catch (e){
      printer(e);
      // this.application.ErrorSlide();
    }

  }

  SendAnother() {
    if(isMobile()){
      this.router.navigateByUrl('select')
    }else{
      this.application.appState = AppState.MAIL_SELECT;
    }
  }
}
