import { Component, OnInit } from '@angular/core';
import {Application} from "../../../../Bloc/Application/Application";
import {AcknowledgeEmailParams, Emailer, ErrorCode, VerifyEmailParams} from "../../../../Bloc/Emailer/Emailer";
import {ApplicationHelper} from "../../../../Bloc/Application/ApplicationHelper";
import {printer} from "../../../../app.component";
import {FormControl, Validators} from "@angular/forms";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../../../environments/environment";
import {Router} from "@angular/router";
import {isMobile} from "../../../../app-routing.module";

@Component({
  selector: 'transfer-verify',
  templateUrl: './transfer-verify.component.html',
  styleUrls: ['./transfer-verify.component.css']
})
export class TransferVerifyComponent extends ApplicationHelper implements OnInit {
  verifying: boolean = false;


  private emailHelper = new Emailer();


  private verifyEmailParams = {
    sessionId: "",
    expiryDate: "",
    emailId: "",
    checkSum: "",
    Id: "",
    requestType:"",
    code:""
  };


  headers  =new HttpHeaders();


  get Username(){
    return this.appSession.form.fromEmail.value;
  }



  code: FormControl = new FormControl('',
    [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(6),Validators.pattern("[0-9]")
    ]);
  private counter!: NodeJS.Timeout;
  resendCounter = 30;



  constructor(
    private httpClient:HttpClient,
    private router:Router,
    public application:Application) {
    super();

    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Access-Control-Allow-Origin', '*')
  }

  ngOnInit(): void {

    this.SendAcknowledgementEmail();

  }

  VerifyCode() {
    this.verifying = true;

    this.verifyEmailParams = {
      ...this.verifyEmailParams,
      requestType:"AV",
      code:this.code.value
    }

    return this.httpClient!.post(environment.emailApi, JSON.stringify(this.verifyEmailParams), {
      headers: this.headers,
    })
      .toPromise()
      .then((response)=>{
        if(response!=undefined){
          printer(response);
          let result = (response as any).response;
          let statusCode = result["statusCode"];
          printer(statusCode);
          if( statusCode == 200){
            printer("User Verified");

            if(isMobile()){
              this.router.navigateByUrl('upload')
            }else{
              this.application.nextSlide();
            }

            if(statusCode == ErrorCode.INVALID_CODE){
              this.code.setErrors({'invalid':true});
            }else if(statusCode == ErrorCode.INVALID_ACCESS || statusCode == ErrorCode.SESSION_EXPIRED){
              this.code.setErrors({'expired':true});
            }


          }else{
            if(statusCode == ErrorCode.INVALID_CODE){
              this.code.setErrors({'invalid':true});
            }else if(statusCode == ErrorCode.INVALID_ACCESS || statusCode == ErrorCode.SESSION_EXPIRED){
              this.code.setErrors({'expired':true});
            }
            // setTimeout(())
            // this.code.setErrors({'invalid':true});
          }
        }
      }).finally(()=>{
        this.verifying = false;
    })



    // setTimeout(()=>{
    //   this.application.nextSlide();
    // },2500);

  }


  async SendAcknowledgementEmail() {

    let params = {
      requestType:"AC",
      emailId: this.Username,
      sessionId: this.appSession.sessionId
    }

    printer(params);
    return this.httpClient!.post(environment.emailApi, JSON.stringify(params), {
      headers: this.headers,
    }).pipe().toPromise().then((res)=>{
      printer(res);

      if(res!=undefined){
        printer(res);
        let result = res as any;
        printer(result);
        this.verifyEmailParams = result["response"];
        printer(this.verifyEmailParams);
      }


    }).catch((err)=>{
      printer("Error");
      printer(err)
    }).finally(()=>{
      this.resendCounter = 60;
      printer("Counter Started");
      this.counter = setInterval(()=>{
        if(this.resendCounter>0)
        {
          this.resendCounter--;
        }else{
          clearInterval(this.counter);
          printer("Counter Finised");
        }
      },1000);
    });

  }

  ResendCode() {
    if(this.resendCounter<=0){
      this.SendAcknowledgementEmail();
    }
  }
}
