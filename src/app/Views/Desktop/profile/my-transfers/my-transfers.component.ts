import { Component, OnInit } from '@angular/core';
import {AppAnimations} from "../../../../Bloc/Application/Constants";
import {Router} from "@angular/router";
import {APIService} from "../../../../API.service";
import {printer} from "../../../../app.component";
import {S3Object, Session} from "../../../../../models";
import {environment} from "../../../../../environments/environment";

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

  sessionOnView!:Session;
  sessionOnViewFiles: Array<S3Object> = [];

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
}
