import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import {getCurrentUser, setCurrentUser} from "../../Signer/SignInHelper";
import {CognitoUser} from "amazon-cognito-identity-js";
import {printer} from "../../../app.component";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
  private currentUser: CognitoUser | undefined;


  constructor(private router:Router) {

  }

  // @ts-ignore
  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree> {

    return await this.AuthenticateUser();

  }

  // @ts-ignore
  async canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree> {
    return await this.AuthenticateUser();
  }


  private async AuthenticateUser() {
    if (getCurrentUser() == undefined) {
      this.currentUser = await setCurrentUser();
      printer("Current User from Guard");
      printer(this.currentUser);
    }else{
      this.currentUser = getCurrentUser();
    }

    if(this.currentUser == undefined){
      this.router.navigateByUrl('/auth');
      return false;
    }

    return true;
  }

}
