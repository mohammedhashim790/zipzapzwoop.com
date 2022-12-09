import {Component, Inject, OnInit} from '@angular/core';
import {AbstractControl, FormControl, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Auth} from "aws-amplify";
import {printer} from "../../../app.component";
import {VerifyUserParams} from "../verify-user/verify-user.component";
import {ForgotPassword, ForgotPasswordSubmit} from "../../../Bloc/Signer/SignInHelper";
import {AppAnimations} from "../../../Bloc/Application/Constants";



export function ConfirmPasswordValidator(fieldToCompare:FormControl):ValidatorFn{
  return (control: AbstractControl): ValidationErrors | null => {

    if(fieldToCompare.value == control.value){
      return null;
    }

    return {invalid:true};
  };
}

export interface ForgotPasswordParams{
  username:string;
  resendCode:boolean;
  forgotAction:boolean;
}

@Component({
  selector: 'app-forgot-password-action',
  templateUrl: './forgot-password-action.component.html',
  styleUrls: ['./forgot-password-action.component.css'],
  animations:AppAnimations
})
export class ForgotPasswordActionComponent implements OnInit {
  get infoText(): string {
    return this._infoText;
  }

  set infoText(value: string) {
    this._infoText = value;

    // setTimeout(()=>{
    //   this._infoText = "";
    // },10000);

  }


  otpSent:boolean = false;
  otpSentResult: any;
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

  private maxTimer = 15;

  public countdownTimer:number = this.maxTimer;

  username:FormControl = new FormControl('',[Validators.email,Validators.required]);

  code:FormControl = new FormControl('',[Validators.required]);

  password:FormControl = new FormControl('',[Validators.required]);

  confirmPassword:FormControl = new FormControl('',[Validators.required,ConfirmPasswordValidator(this.password)]);


  private _errorText: string = '';
  loading: boolean = false;


  get Username(){
    // if(!this.params)
    //   return 'mohammedhashim790@gmail.com';
    return this.username.value;
  }

  constructor(
    private router:Router,
    private dialogRef:MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public params:ForgotPasswordParams
  ) {
    this.dialogRef.disableClose = false;
    if(this.params && !this.params.forgotAction && this.params.username!=undefined) {
      this.username.setValue(this.params.username);
      this.resetTimer(this.params.resendCode ?? false);
    }
  }

  ngOnInit(): void {

  }

  async resetTimer(resendCode:boolean) {
    if(resendCode){
      await this.SendOtp();
    }
    this.countdownTimer = this.maxTimer;
    let intervals = setInterval(() => {
      this.countdownTimer--;
      if (this.countdownTimer == 0) {
        clearInterval(intervals);
      }
    }, 1000);
  }


  SendOtp(){

    // this.otpSent = true;
    //
    // this.otpSentResult = "";
    //
    // this.username.disable();
    //
    // this.resetTimer(false);



    ForgotPassword(this.username.value).then((res)=>{
      printer("OTP Sent");

      this.dialogRef.disableClose = true;

      this.otpSent = true;

      this.otpSentResult = res;

      this.username.disable();
      this.resetTimer(false);

    }).catch((err)=>{
      printer("Error");
      printer(err.message);
      this.errorText = err.message;
    })
  }

  ResetPassword() {
    printer(this.code.valid && this.password.valid && this.confirmPassword.valid)
    if(this.code.valid && this.password.valid && this.confirmPassword.valid && this.otpSentResult!=undefined){
      this.loading = true;
      ForgotPasswordSubmit(
        this.username.value,
        this.code.value,
        this.password.value
      ).then((res)=>{
        this._infoText = "Your New password is set. Please login to authenticate.";
        setTimeout(()=>{
          this.dialogRef.close();
        },5000)
      }).catch((err)=>{
        printer("Error in Resetting Password");
        this.errorText = err.message;
        this.loading = false;
      });

    }
  }
}
