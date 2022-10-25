import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {VerifyUserComponent} from "../../DialogViews/verify-user/verify-user.component";
import {OkayCancelComponent} from "../../DialogViews/okay-cancel/okay-cancel.component";
import {printer} from "../../../app.component";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {SignIn, SignInWithGoogle, SignOut} from "../../../Bloc/Signer/SignInHelper";
import {cognitoAUTH, confirmSignUpException} from "../../../Bloc/Signer/Constants";
import {Auth} from "aws-amplify";
import {AppAnimations} from "../../../Bloc/Application/Constants";

@Component({
  selector: 'msign-in',
  templateUrl: './msign-in.component.html',
  styleUrls: ['./msign-in.component.css'],
  animations:AppAnimations

})
export class MSignInComponent implements OnInit {


  width:number = window.innerWidth;

  loading: boolean = false;
  showPassword: boolean = false;

  signInForm:FormGroup = new FormBuilder().group({
    'username':new FormControl('',[Validators.email,Validators.required]),
    'password':new FormControl('',[Validators.required])
  });
  errorText: string = "";

  constructor(
    private router:Router,
    private dialog:MatDialog) {
    SignOut();


  }

  ngOnInit(): void {
  }

  ValidateSignIn() {
    this.loading = true;

    printer(this.signInForm.value);

    SignIn(this.signInForm.value).then((res)=>{

      // this.user = res;

      printer(res);

      if(res['challengeName'])
        this.HandleChallenges(res['challengeName'])
      else
        this.router.navigateByUrl('');

    }).catch((error)=>{

      printer("error");
      printer(error);
      this.HandleError(error);

    }).finally(()=>{
      this.loading = false;
    });


  }


  async HandleError(errorValue: any) {
    const {code, message} = errorValue;
    printer(code);
    switch (code) {
      case confirmSignUpException[confirmSignUpException.UserNotFoundException]:
        printer("user Not Found");
        this.setErrors('Username Not Found');
        break;
      case cognitoAUTH[cognitoAUTH.NotAuthorizedException]:
        printer(message);
        this.setErrors(message);
        break;

      case cognitoAUTH[cognitoAUTH.UserNotConfirmedException]:
        printer("User not confimed");
        let res = await Auth.resendSignUp(this.signInForm.controls['username'].value);
        // this.user = res;
        printer(res);
        this.dialog.open(
          VerifyUserComponent,
          {
            data: {
              username:this.signInForm.controls['username'].value,
              onVerify:(dialogRef:MatDialogRef<any>)=>{
                //  TODO AUTO SIGN IN USER AFTER VERIFICATION
                dialogRef.close();
                this.ValidateSignIn();
              }
            }
          }
        );
        break;

    }
  }

  HandleChallenges(errorValue:any){
    switch (errorValue){
      case cognitoAUTH[cognitoAUTH.NEW_PASSWORD_REQUIRED]:
        printer("New Password Required");
        break;

      case cognitoAUTH[cognitoAUTH.MFA]:
        printer("MFS Required");
        break;

      case cognitoAUTH[cognitoAUTH.Password_Reset_Required]:
        printer("Password Reset Required");
        break;

      case cognitoAUTH[cognitoAUTH.SMS_MFA]:
        printer("SMS MFA Required");
        break;
    }
  }

  private setErrors(value: string) {
    this.errorText = value;

    // setTimeout(()=>{
    //   this.errorText = "";
    // },3000);
    //
    // this.dialog.open(
    //   OkayCancelComponent,
    //   {
    //     data:{
    //       title:"Error Signing in.",
    //       content:value,
    //       onOkay:()=>{
    //         printer("Retry")
    //       }
    //     }
    //   }
    // );


  }

  SignInWithGoogle() {
    SignInWithGoogle();
  }
}
