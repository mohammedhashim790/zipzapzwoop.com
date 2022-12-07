import { Component, OnInit } from '@angular/core';
import {getCurrentUser, getUserInitials, SignOut} from "../../../../Bloc/Signer/SignInHelper";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  get SignedIn(){
    return getCurrentUser();
  }

  get UserInitials(){
    return getUserInitials();
  }



  constructor() { }

  ngOnInit(): void {
  }

  SignOut() {
    SignOut().finally(()=>{
      window.location.reload();
    })
  }

}
