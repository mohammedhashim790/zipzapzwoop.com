import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {SignUpParams} from "@aws-amplify/auth/src/types";
import {Auth} from "aws-amplify";
import {FormControl, Validators} from "@angular/forms";
import {printer} from "../../../app.component";
import {Router} from "@angular/router";
import {AppAnimations} from "../../../Bloc/Application/Constants";


export interface VerifyUserParams {
  username:string;
  resendCode:boolean;
  onVerify:(dialogRef:MatDialogRef<any>)=>any
}

@Component({
  selector: 'app-verify-user',
  templateUrl: './verify-user.component.html',
  styleUrls: ['./verify-user.component.css'],
  animations:AppAnimations
})
export class VerifyUserComponent implements OnInit {

  private maxTimer = 15;

  public countdownTimer:number = this.maxTimer;

  code:FormControl = new FormControl('',[Validators.required]);
  errorText: string = '';


  get Username(){
    // if(!this.params)
    //   return 'mohammedhashim790@gmail.com';
    return this.params.username;
  }

  constructor(
    private router:Router,
    private dialogRef:MatDialogRef<any>,
     @Inject(MAT_DIALOG_DATA) public params:VerifyUserParams
  ) {
    this.dialogRef.disableClose = true;
    if(this.params)
    this.resetTimer(this.params.resendCode ?? false);
  }

  ngOnInit(): void {
  }

  async resetTimer(resendCode:boolean) {
    if(resendCode){
      await Auth.resendSignUp(this.Username);
    }
    this.countdownTimer = this.maxTimer;
    let intervals = setInterval(() => {
      this.countdownTimer--;
      if (this.countdownTimer == 0) {
        clearInterval(intervals);
      }
    }, 1000);
  }

  VerifyUser() {
    Auth.confirmSignUp(this.Username,this.code.value).then((res)=>{
      printer("Verified");

      this.params.onVerify(this.dialogRef);
    }).catch((error)=>{
      printer(error);
      this.errorText = error.message;
    });
  }
}
