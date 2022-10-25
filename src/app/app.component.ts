import {Component, HostListener} from '@angular/core';
import {isMobile} from "./app-routing.module";
import {getCurrentUser, setCurrentUser} from "./Bloc/Signer/SignInHelper";
import {Session} from "./Bloc/Application/Session";
import {AWSError, Lambda} from "aws-sdk";
import {aws_exports} from "../aws-exports";


export var printer = console.log;

export interface IAppBrowserStorage{
  key:string;
  value:any;
}


export interface AppBrowserStorage{
  TnC:IAppBrowserStorage;
  AssetId:IAppBrowserStorage;
}


export var browserCache:AppBrowserStorage = {
  TnC:{
    key:"tnc",
    value:true
  },
  AssetId:{
    key:"SessionID",
    value:"Session"
  }
}



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'zipzapzwoop -  a simple way to share large file to the world';

  private session:Session = Session.GetInstance();
  // private awsLambda: Lambda;






  constructor() {



    this.SetBrowserCache();


    setCurrentUser()
      .then((res)=>{
        this.session.form.fromEmail.setValue((res as any).attributes.email);
    });

    if(isMobile()){
      document.documentElement.style.minWidth = "unset";
      document.documentElement.style.overflowX = "hidden";
      // document.documentElement.style.maxWidth = window.innerWidth + "px";
      document.body.style.minWidth = "unset";
      document.body.style.overflowX = "hidden";
      document.body.style.background = "#f0f0f0";

      // document.body.style.maxWidth = window.innerWidth + "px";
    }

  }




  async SetBrowserCache(){


  }

  // trigger(functionName:string, payload:string): Promise<any> {
  //   return new Promise(
  //     (resolve, reject) => {
  //       const params = {
  //         FunctionName: functionName,
  //         InvocationType: 'RequestResponse',
  //         LogType: 'Tail',
  //         Payload: JSON.stringify(payload)
  //       };
  //       this.awsLambda.invoke(params, (err: AWSError, data: Lambda.InvocationResponse) => {
  //         if (err) {
  //           printer("error");
  //           printer(err.message);
  //           return reject(err)
  //         }
  //         if (data.StatusCode !== 200 && data.StatusCode !== 201) {
  //           printer("error");
  //           return reject(data)
  //         }
  //         const responsePayload = data.Payload
  //         return resolve(JSON.parse(responsePayload!.toString()))
  //       })
  //
  //     }
  //   )
  // }


}
