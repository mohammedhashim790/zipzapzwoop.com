import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ChangePassword, ForgotPassword, ForgotPasswordSubmit, getCurrentUser} from "../../../Bloc/Signer/SignInHelper";
import {printer} from "../../../app.component";
import {
  ConfirmPasswordValidator,
  ForgotPasswordParams
} from "../forgot-password-action/forgot-password-action.component";
import {CognitoUser} from "amazon-cognito-identity-js";
import {AppAnimations} from "../../../Bloc/Application/Constants";
import {Auth} from "aws-amplify";

@Component({
  selector: 'app-change-password-action',
  templateUrl: './change-password-action.component.html',
  styleUrls: ['./change-password-action.component.css'],
  animations:AppAnimations
})
export class ChangePasswordActionComponent implements OnInit {


  showPassword:boolean = false;


  get infoText(): string {
    return this._infoText;
  }

  set infoText(value: string) {
    this._infoText = value;

    // setTimeout(()=>{
    //   this._infoText = "";
    // },10000);

  }


  private _infoText: string =  "";

  get errorText(): string {
    return this._errorText;
  }

  set errorText(value: string) {
    this._errorText = value;

    setTimeout(()=>{
      this._errorText = "";
    },10000);
  }


  username:FormControl = new FormControl('',[Validators.required]);

  oldPassword:FormControl = new FormControl('',[Validators.required]);

  newPassword:FormControl = new FormControl('',[Validators.required]);


  private _errorText: string = '';
  loading: boolean = false;

  userDetails:any


  get Username(){
    // if(!this.params)
    //   return 'mohammedhashim790@gmail.com';
    return this.username.value;
  }

  constructor(
    private router:Router,
    private dialogRef:MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public params:any
  ) {
    this.dialogRef.disableClose = false;
    this.userDetails = getCurrentUser();
    this.username.setValue(this.userDetails['attributes']['email']);
    this.username.disable();
  }

  ngOnInit(): void {
  }


  ChangePassword() {
    if(this.oldPassword.valid && this.newPassword.valid){
      this.loading = true;
      ChangePassword(
        this.userDetails,
        this.oldPassword.value,
        this.newPassword.value
      ).then((res)=>{
        this._infoText = "Your New password has been changed";
        setTimeout(()=>{
          this.dialogRef.close();
        },5000)
      }).catch((err)=>{
        printer("Error in Changing Password");
        this.errorText = err.message;
        this.loading = false;
      });

    }
  }
}
