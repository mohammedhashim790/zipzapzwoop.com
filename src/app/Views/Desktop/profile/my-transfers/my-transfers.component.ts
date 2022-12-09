import { Component, OnInit } from '@angular/core';
import {AppAnimations} from "../../../../Bloc/Application/Constants";
import {Router} from "@angular/router";
import {APIService} from "../../../../API.service";
import {printer} from "../../../../app.component";
import {S3Object, Session} from "../../../../../models";
import {environment} from "../../../../../environments/environment";
import {ConvertToEpochInSeconds} from "../../../../Bloc/Application/ApplicationHelper";

// import * as prettyIcons from 'pretty-file-icons';

var mime = require('mime-types');

@Component({
  selector: 'app-my-transfers',
  templateUrl: './my-transfers.component.html',
  styleUrls: ['./my-transfers.component.css'],
  animations:AppAnimations
})
export class MyTransfersComponent implements OnInit {


  sessions!:Array<Session>;

  sessionsResult!:Array<Session>;



  sessionOnView!:Session;
  sessionOnViewFiles: Array<S3Object> = [];
  searchQuery: string = "";
  get Expiry(){
    if(this.sessionOnView==null || this.sessionOnView.expiry==null){
      return 1;
    }
    return new Date(this.sessionOnView.expiry * 1000).getTime() ;
  };

  get Expired(){
    if(this.sessionOnView==null || this.sessionOnView.expiry==null){
      return true;
    }
    let expiry = this.sessionOnView.expiry;
    let currentDate = new Date();
    expiry*=1000;
    let expiryDate = new Date(expiry);
    printer(currentDate <= expiryDate);
    return !(currentDate <= expiryDate);
  }

  get DaysRemaining(){
    if(this.sessionOnView==null || this.sessionOnView.expiry==null){
      return 0;
    }
    let expiry = this.sessionOnView.expiry;
    let currentDate = new Date();
    expiry*=1000;
    let expiryDate = new Date(expiry);
    return (expiryDate.getDate() - currentDate.getDate());
  }

  get CopyLink(){
    if(this.LinkTransfer){
      return "http://z3transfer.com/" + this.sessionOnView.shortUrl;
    }
    return "https://zipzapzwoop.com/download?id="+this.sessionOnView.id;
  }




  get LinkTransfer(){
    return this.sessionOnView.mailInfo == undefined;
  }

  fileExtension(file: S3Object){
    return mime.extension(file.mimetype as string);
  }

  fileIcon(file: S3Object){
    return (
      file.key.endsWith(".png") ||
      file.key.endsWith(".jpg") ||
      file.key.endsWith(".jpeg") ||
      file.key.endsWith(".gif")
    );
  }


  hasExpired(session:Session){
    if(session==null || session.expiry==null){
      return 0;
    }
    let expiry = session.expiry;
    let currentDate = new Date();
    expiry*=1000;
    let expiryDate = new Date(expiry);
    return (expiryDate.getDate() - currentDate.getDate());
  }





  constructor(
    private router:Router,
    private api:APIService
  ) {

    this.api.ListSessions().then((session)=> {
      printer("Sessions");
      this.sessions = session.items as any as Array<Session>;

      this.sessions.sort((session1,session2)=>{
        return (Date.parse(session2!.SentOn as string) - Date.parse(session1!.SentOn as string));
      });
      this.sessionsResult = this.sessions;
      this.onSelected(this.sessions[0])
      printer(this.sessions);
    });

  }

  ngOnInit(): void {

  }

  range(number: number) {
    return Array(number).fill(0);
  }


  SrcUrl(path: S3Object) {
    return environment.media +this.sessionOnView!.id + '/' + path.key;
  }

  toNumber(fileSize: any) {
    return Number.parseInt(fileSize);
  }

  onSelected(session: Session){
    this.sessionOnView = session;
    this.sessionOnViewFiles = (session!.files?.slice(0,18) as Array<S3Object>) ;
    printer(session);
  }

  OnSearchChange(key: string) {

    if(key == ""){
      this.sessions = this.sessionsResult;
      return;
    }

    let filtered = this.sessions.filter((session)=>{

      let sessionInfo;

      if(session.mailInfo == undefined){
      //  Mail
        sessionInfo = session!.linkInfo;
      }else{
      //  Link
        sessionInfo = session!.mailInfo;
      }
      if(
        sessionInfo!.Title.includes(key) ||
        sessionInfo!.Message.includes(key) ||
        session!.mailInfo?.Recipients!.includes(key) ||
        session!.files?.map((file)=>file?.key).includes(key)
      ){
        return true;
      }
      return false;
    })

    printer("Filtered");
    printer(filtered);
    this.sessions = filtered;

  }
}
