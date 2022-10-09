import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MSignInComponent } from './msign-in/msign-in.component';
import {MaterialModuleModule} from "../material-module/material-module.module";
import {AppComponent} from "../../app.component";
import { MSignUpComponent } from './msign-up/msign-up.component';
import {AppRoutingModule} from "../../app-routing.module";
import { MHomeComponent } from './mhome/mhome.component';
import { MTransferSelectComponent } from './MTransferViews/mtransfer-select/mtransfer-select.component';
import { MTransferCompletedComponent } from './MTransferViews/mtransfer-completed/mtransfer-completed.component';
import { MTransferUploadComponent } from './MTransferViews/mtransfer-upload/mtransfer-upload.component';
import { MTransferVerifyComponent } from './MTransferViews/mtransfer-verify/mtransfer-verify.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    MSignInComponent,
    MSignUpComponent,
    MHomeComponent,
    MTransferSelectComponent,
    MTransferCompletedComponent,
    MTransferUploadComponent,
    MTransferVerifyComponent,
  ],
  imports: [
    CommonModule,
    MaterialModuleModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap:[AppComponent]
})
export class MobileModule { }
