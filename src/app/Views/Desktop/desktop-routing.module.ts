import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {SignInComponent} from "./sign-in/sign-in.component";
import {SignUpComponent} from "./sign-up/sign-up.component";

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
];;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesktopRoutingModule { }
