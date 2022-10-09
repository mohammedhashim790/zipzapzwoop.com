import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./Views/home/home.component";
import {SignInComponent} from "./Views/sign-in/sign-in.component";
import {SignUpComponent} from "./Views/sign-up/sign-up.component";
import {MSignInComponent} from "./Views/Mobile/msign-in/msign-in.component";
import {printer} from "./app.component";
import {MSignUpComponent} from "./Views/Mobile/msign-up/msign-up.component";
import {MHomeComponent} from "./Views/Mobile/mhome/mhome.component";
import {WelcomeUserComponent} from "./Views/DialogViews/welcome-user/welcome-user.component";

export const isMobile = () => {
  printer("Width");
  printer(window.innerWidth);
  return window.innerWidth<=700;
};


const DesktopRoutes = [
  {
    path:'',
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
];

const MobileRoutes = [
  {
    path:'',
    component:MHomeComponent
  },
  {
    path:'auth',
    component:MSignInComponent
  },
  {
    path:'sign-up',
    component:MSignUpComponent
  },
  {
    path:'welcome',
    component:WelcomeUserComponent
  },

]

const routes: Routes = (isMobile())?MobileRoutes:DesktopRoutes;





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
