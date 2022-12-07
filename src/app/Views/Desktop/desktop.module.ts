import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesktopRoutingModule } from './desktop-routing.module';
import {HomeComponent} from "./home/home.component";
import {SignInComponent} from "./sign-in/sign-in.component";
import {OkayCancelComponent} from "../DialogViews/okay-cancel/okay-cancel.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {VerifyUserComponent} from "../DialogViews/verify-user/verify-user.component";
import {BackdropComponent} from "./backdrop/backdrop.component";
import {TransferSelectComponent} from "./TransferViews/transfer-select/transfer-select.component";
import {TransferVerifyComponent} from "./TransferViews/transfer-verify/transfer-verify.component";
import {TransferUploadComponent} from "./TransferViews/transfer-upload/transfer-upload.component";
import {TransferCompletedComponent} from "./TransferViews/transfer-completed/transfer-completed.component";
import {TooltipDirective} from "../../Bloc/Directives/Tooltip/tooltip.directive";
import {ErrorWindowComponent} from "./TransferViews/error-window/error-window.component";
import {WelcomeUserComponent} from "../DialogViews/welcome-user/welcome-user.component";
import {TransferDownloadComponent} from "./TransferViews/transfer-download/transfer-download.component";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "../../app-routing.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MaterialModuleModule} from "../material-module/material-module.module";
import {ClipboardModule} from "@angular/cdk/clipboard";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {PipesModule} from "../../Bloc/Pipes/pipes.module";
import {Application} from "../../Bloc/Application/Application";
import {IfChangesDirective} from "../../Bloc/Directives/IfChanges/IfChanges";
import { ProfileComponent } from './TransferViews/profile/profile.component';
import {MatListModule} from "@angular/material/list";


@NgModule({
    declarations: [
        HomeComponent,
        SignInComponent,
        OkayCancelComponent,
        SignUpComponent,
        VerifyUserComponent,
        BackdropComponent,
        TransferSelectComponent,
        TransferVerifyComponent,
        TransferUploadComponent,
        TransferCompletedComponent,
        TooltipDirective,
        ErrorWindowComponent,
        WelcomeUserComponent,
        TransferDownloadComponent,
      IfChangesDirective,
      ProfileComponent
    ],
    imports: [
        CommonModule,
        DesktopRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModuleModule,
        ClipboardModule,
        MatAutocompleteModule,
        PipesModule,
        MatListModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [Application],
    exports: [
        TooltipDirective
    ]
})
export class DesktopModule { }
