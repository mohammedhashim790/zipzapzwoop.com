import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {SignInComponent} from "./sign-in/sign-in.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {ProfileComponent} from "./profile/profile.component";
import {isMobile} from "../../app-routing.module";
import {AuthGuard} from "../../Bloc/Guards/AuthGuard/auth-guard.service";

const routes: Routes = [
  {
    path:'',

    component:HomeComponent
  },
  {
    path:'download',
    component:HomeComponent
  },
  {
    path:'auth',
    component:SignInComponent
  },
  {
    path:'sign-up',
    component:SignUpComponent
  },
  {
    path:'profile',
    canActivateChild:[AuthGuard],
    loadChildren:()=> {
        return import('./profile/profile.module').then(d => d.ProfileModule);
    }
  },
  { path: '404', redirectTo:'' },
  { path: '**', redirectTo:'' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesktopRoutingModule { }
