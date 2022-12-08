import { Component, OnInit } from '@angular/core';
import {getCurrentUser, getUserInitials, SignOut} from "../../../../Bloc/Signer/SignInHelper";
import {Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {printer} from "../../../../app.component";
import {AppAnimations} from "../../../../Bloc/Application/Constants";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  animations:AppAnimations
})
export class UserProfileComponent implements OnInit {


  attributes = {
    email:'',
    email_verified:'',
    name:'',
    preferred_username:'',
    sub:'',
  }


  userAttributes:FormGroup = new FormBuilder().group({
    email:new FormControl('',[Validators.required]),
    email_verified:new FormControl(false,[Validators.required]),
    name:new FormControl('',[Validators.required]),
    preferred_username:new FormControl('',[Validators.required]),
    sub:new FormControl('',[Validators.required]),
  });
  currentUserAttributes: any;



  get UserInitials(){
    return getUserInitials();
  }

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.currentUserAttributes = (getCurrentUser() as any).attributes;

    this.userAttributes.setValue({
      email: this.currentUserAttributes['email'] ?? '',
      email_verified:this.currentUserAttributes['email_verified']??false,
      name:this.currentUserAttributes['name']??'',
      preferred_username:this.currentUserAttributes['preferred_username']?? this.currentUserAttributes['email'],
      sub:this.currentUserAttributes['sub']??'',
    })


    this.userAttributes.disable();

    // this.userAttributes.controls['email_verified'].disable();
    // this.userAttributes.controls['preferred_username'].disable();
    this.userAttributes.disable();
    this.attributes = this.userAttributes.value;
  }

  SignOut() {
    SignOut().finally(()=>{
      this.router.navigateByUrl('/auth').then(()=> window.location.reload())
    })
  }

  EnableEdit() {
    this.userAttributes.controls['email'].enable();
  }

  SaveAndUpdateForm(){
    this.userAttributes.disable();
  }

}
