
import {HttpClient, HttpHeaders, HttpXhrBackend} from "@angular/common/http";
import {Epoch} from "aws-sdk/clients/ecr";
import {environment} from "../../../environments/environment";
import {printer} from "../../app.component";
import {TransferConstants} from "../Application/TransferFiles";
import {Session} from "../Application/Session";
import {MemUnitsPipe} from "../Pipes/MemUnits/mem-units.pipe";

export interface EmailParams{
  DownloadUrl: string;
  title: string;
  recipients:Array<string>;
  SessionId:string;
  fromAddress:string;
  body:string;
  passwordEnabled:boolean;
  password:string,
}



export enum ErrorCode {
  OK=200,
  INVALID_CODE=230,
  SESSION_EXPIRED=231,
  INVALID_ACCESS=400
}

export enum EmailEpitome{
  DELIVERY = "DELIVERY",
  NOTIFY = "NOTIFY",
  ACKNOWLEDGE = "ACKNOWLEDGE",
  VERIFY = "VERIFY",
  SCHEDULE="SCHEDULE",
  REVIEW ="REVIEW"
}

export interface SesData{
  SesData:{
    EmailEpitome:EmailEpitome;
    AcknowledgeEmailParams?:AcknowledgeEmailParams;
    VerifyEmailParams?:VerifyEmailParams;
    NotifyEmailParams?:NotifyEmailParams;
    DeliveryTransferEmailParams?:DeliveryTransferEmailParams;
    ScheduleDeliveryTransferEmailParams?:ScheduleDeliveryTransferEmailParams;
    SendReviewParams?:SendReviewParams;
    RequestTime: string
  }
}

export type AcknowledgeEmailParams={
  sessionId: string,
  emailId: string,
}

export type VerifyEmailParams = {
  Id: string,
  emailId: string,
  expiryDate: -1,
  sessionId: string,
  code: string,
  checkSum: string
}

export type NotifyEmailParams={
  ToAddress:string
}

export type ScheduleDeliveryTransferEmailParams={
  ScheduledAt:Epoch,
  TransferSent:Boolean,
  EmailParams:DeliveryTransferEmailParams
}

export type SendReviewParams={
  name?:string,
  message:string
}

export type DeliveryTransferEmailParams={
  SessionId: string,
  DownloadUrl:string,
  MailInfo: MailInfo,
  passwordEnabled: boolean,
  password: string,
  FileParams:{
    Password: string,
    PasswordEnabled: boolean,
    FilesLength:number,
    Expiry: Date,
    FilesSize:string
  }
}

export type MailInfo={
  FromEmail: string,
  Recipients: Array<string>,
  Cc: Array<string>,
  Bcc: Array<string>,
  Subject: string,
  Title: string,
  Message: string
}

export interface ApiParams{
  "SesData": {
    "EmailEpitome": EmailEpitome,
    "AcknowledgeEmailParams": {
      "sessionId": string,
      "emailId": string,
    },
    "VerifyEmailParams":{
      "Id": string,
      "emailId": string,
      "expiryDate": -1,
      "sessionId": string,
      "code": string,
      "checkSum": string
    },
    "NotifyEmailParams": {
      "ToAddress": string
    },
    "DeliveryTransferEmailParams": {
      "SessionId": string,
      "MailInfo": {
        "FromEmail": string,
        "Recipients": Array<string>,
        "Cc": Array<string>,
        "Bcc": Array<string>,
        "Subject": string,
        "Title": string,
        "Message": string
      },
      "DownloadUrl":string,
      "passwordEnabled": boolean,
      "password": string
    },
    "RequestTime": Date
  }
}





export class Emailer{


  private http:HttpClient;
  constructor() {
    this.http = new HttpClient(new HttpXhrBackend({
      build: () => new XMLHttpRequest()
    }));
  }

  SendEmail(params:SesData){
    printer(JSON.stringify(params));
    let headers  =new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*')
    return this.http!.post(environment.emailApi, JSON.stringify(params), {
      headers: headers,
      }).pipe();
  }


  CreateAcknowledgementEmailBody(acknowledgeEmailParams:AcknowledgeEmailParams){
    let params:SesData = {
        SesData:{
          EmailEpitome:EmailEpitome.ACKNOWLEDGE,
          AcknowledgeEmailParams:acknowledgeEmailParams,
          RequestTime:new Date(Date.now()).toISOString()
        }
    }
    return params;
  }

  CreateVerifyEmailBody(verifyEmailParams:VerifyEmailParams){
    let params:SesData = {
      SesData:{
        EmailEpitome:EmailEpitome.VERIFY,
        VerifyEmailParams:verifyEmailParams,
        RequestTime:new Date(Date.now()).toISOString()
      }
    }
    return params;
  }


  CreateTransferEmailBody(
    emailParams:EmailParams,
    session:Session
  ){
    let expiryDate = new Date();
    expiryDate.setDate(new Date().getDate() + TransferConstants.expiryDate());

    let deliveryEmailParams:DeliveryTransferEmailParams = {
      SessionId: emailParams.SessionId,
      MailInfo: {
        FromEmail: emailParams.fromAddress,
        Recipients: emailParams.recipients,
        Cc: [],
        Bcc: [],
        Subject: `${emailParams.fromAddress} has shared files with you`,
        Title: emailParams.title,
        Message: emailParams.body
      },
      passwordEnabled: emailParams.passwordEnabled,
      DownloadUrl:emailParams.DownloadUrl,
      password: emailParams.password,
      FileParams:{
        Password: emailParams.password,
        PasswordEnabled: emailParams.passwordEnabled,
        FilesLength:session.transferFiles.files.flat().length,
        Expiry: expiryDate,
        FilesSize:new MemUnitsPipe().transform(session.transferFiles.size)
      }
    };

    let params:SesData;

    params = {
      SesData:{
        EmailEpitome:EmailEpitome.DELIVERY,
        DeliveryTransferEmailParams: deliveryEmailParams,
        RequestTime:new Date(Date.now()).toISOString()
      }
    }

    return params;
  }


}
