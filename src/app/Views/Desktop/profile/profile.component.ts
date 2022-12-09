import {Component, OnDestroy, OnInit} from '@angular/core';
import {getCurrentUser, getUserInitials, SignOut} from "../../../Bloc/Signer/SignInHelper";
import {printer} from "../../../app.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit,OnDestroy {

  get SignedIn(){
    return getCurrentUser();
  }

  get UserInitials(){
    return getUserInitials();
  }


  get CurrentRoute(){
    return window.location.pathname;
  }

  constructor(private router:Router) { }

  ngOnInit(): void {
    printer("Pathname");
    printer(window.location.pathname);

    // document.body.style.backgroundColor = "#2F2F2F";
  }

  ngOnDestroy() {
    // document.body.style.backgroundColor = "#ffffff";

  }

  SignOut() {
    SignOut().finally(()=>{
      this.router.navigateByUrl('').then((res)=>{
        window.location.reload();
      });
    })
  }


}
