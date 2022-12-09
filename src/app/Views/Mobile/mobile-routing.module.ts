import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MHomeComponent} from "./mhome/mhome.component";
import {MSignInComponent} from "./msign-in/msign-in.component";
import {MSignUpComponent} from "./msign-up/msign-up.component";
import {WelcomeUserComponent} from "../DialogViews/welcome-user/welcome-user.component";
import {MTransferSelectComponent} from "./MTransferViews/mtransfer-select/mtransfer-select.component";
import {
  MTransferOptionSelectComponent
} from "./MTransferViews/mtransfer-option-select/mtransfer-option-select.component";
import {MTransferUploadComponent} from "./MTransferViews/mtransfer-upload/mtransfer-upload.component";
import {TransferUploadComponent} from "../Desktop/TransferViews/transfer-upload/transfer-upload.component";
import {TransferVerifyComponent} from "../Desktop/TransferViews/transfer-verify/transfer-verify.component";
import {TransferCompletedComponent} from "../Desktop/TransferViews/transfer-completed/transfer-completed.component";
import {TransferDownloadComponent} from "../Desktop/TransferViews/transfer-download/transfer-download.component";
import {MLandingComponent} from "./mlanding/mlanding.component";
import {ErrorWindowComponent} from "../Desktop/TransferViews/error-window/error-window.component";
import {Auth} from "aws-amplify";
import {AuthGuard} from "../../Bloc/Guards/AuthGuard/auth-guard.service";

const routes: Routes = [
  {
    path:'',
    component:MHomeComponent,
    children:[
      {
        path:'',
        component:MLandingComponent
      },
      {
        path:'select',
        component:MTransferSelectComponent
      },
      {
        path:'option',
        component:MTransferOptionSelectComponent
      },
      {
        path:'verify',
        component:TransferVerifyComponent
      },
      {
        path:'upload',
        component:TransferUploadComponent
      },
      {
        path:'transfer-sent',
        component:TransferCompletedComponent
      },
      {
        path:'download',
        component:TransferDownloadComponent
      },
      {
        path:'profile',
        canActivateChild:[AuthGuard],
        loadChildren:()=> {
          return import('./../Desktop/profile/profile.module').then(d => d.ProfileModule);
        }
      },
    ]
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
  {
    path:'error',
    component:ErrorWindowComponent
  },
  { path: '404', redirectTo:'' },
  { path: '**', redirectTo:'' }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MobileRoutingModule { }
