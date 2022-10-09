import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {VerifyUserComponent} from "../DialogViews/verify-user/verify-user.component";
import {SignUpParams} from "@aws-amplify/auth/src/types";
import {printer} from "../../app.component";
import {SignIn, SignInWithGoogle, SignOut, SignUp} from "../../Bloc/Signer/SignInHelper";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {cognitoSignUpException} from "../../Bloc/Signer/Constants";
import {AppAnimations} from "../../Bloc/Application/Constants";
import {Auth} from "aws-amplify";
import {Router} from "@angular/router";
import {WelcomeUserComponent} from "../DialogViews/welcome-user/welcome-user.component";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  animations:AppAnimations
})
export class SignUpComponent implements OnInit {

  loading: boolean = false;
  showPassword: boolean = false;


  signUpForm:FormGroup = new FormBuilder().group({
    'fullName':new FormControl('',[Validators.required]),
    'email':new FormControl('',[Validators.email,Validators.required]),
    'password':new FormControl('',[Validators.required]),
    'confirmPassword':new FormControl('',[Validators.required]),
  });
  errorText: string = "";


  constructor(private dialog:MatDialog,private router:Router) {
  }

  ngOnInit(): void {
    SignOut();
    // this.WelcomeNote()
  }

  ValidateSignUp() {

    this.loading = true;
    // setTimeout(()=>{
    //   this.loading = false;
    //   this.dialog.open(VerifyUserComponent);
    //
    // },2500);

    if(this.signUpForm.controls['password'].value != this.signUpForm.controls['confirmPassword'].value){
      this.errorText = "Password and Confirm password are not similar.";
      this.loading = false;
      return;
    }

    this.signUpForm.disable();

    let params:SignUpParams = {
      username:this.signUpForm.controls['email'].value,
      password:this.signUpForm.controls['password'].value,
      attributes:{
        name:this.signUpForm.controls['fullName'].value,
        email:this.signUpForm.controls['email'].value,
        preferred_username:this.signUpForm.controls['email'].value,
      }
    }
    printer(params);
    SignUp(params).then((res)=>{
      printer(res);
      this.dialog.open(
        VerifyUserComponent,
        {
          data:{
            username:params.username,
            onVerify:(dialogRef:MatDialogRef<any>)=>{
            //  TODO AUTO SIGN IN USER AFTER VERIFICATION
              dialogRef.close();
              this.WelcomeNote();
            }
          }
        }
      );

    }).catch((error)=>{
      printer(error);
      this.HandleErrors(error);
    }).finally(()=>{
      this.loading = false;
      this.signUpForm.enable();

    });


  }

  HandleErrors(error:any){
    const {code,message} = error;
    printer(code);
    switch (code){
      case cognitoSignUpException[cognitoSignUpException.UsernameExistsException]:
        printer("Username Exists");
        this.SetErrors(message);
        break;
    }

  }

  private SetErrors(message: any) {
    this.errorText = message;
    setTimeout(()=>{
      this.errorText = "";
    },7000);
  }


  SignUpWithGoogle() {
    SignInWithGoogle()
  }


  private WelcomeNote() {
    SignIn({
      username:this.signUpForm.controls['email'].value,
      password:this.signUpForm.controls['password'].value,
      rememberDevice:true
    })
    this.dialog.open(
      WelcomeUserComponent,
      {
        data:{
          username:this.signUpForm.controls['fullName'].value
        },
        disableClose:true
      }
    );
  }
}
