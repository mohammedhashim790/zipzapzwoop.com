import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {AppComponent, printer} from './app.component';
import { HomeComponent } from './Views/Desktop/home/home.component';
import { SignInComponent } from './Views/Desktop/sign-in/sign-in.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {OkayCancelComponent} from "./Views/DialogViews/okay-cancel/okay-cancel.component";
import {MatDialogModule} from "@angular/material/dialog";
import { SignUpComponent } from './Views/Desktop/sign-up/sign-up.component';
import { VerifyUserComponent } from './Views/DialogViews/verify-user/verify-user.component';
import { BackdropComponent } from './Views/Desktop/backdrop/backdrop.component';
import { TransferSelectComponent } from './Views/Desktop/TransferViews/transfer-select/transfer-select.component';
import { TransferVerifyComponent } from './Views/Desktop/TransferViews/transfer-verify/transfer-verify.component';
import { TransferUploadComponent } from './Views/Desktop/TransferViews/transfer-upload/transfer-upload.component';
import {MatDividerModule} from "@angular/material/divider";
import {MatChipsModule} from "@angular/material/chips";
import {Application} from "./Bloc/Application/Application";
import { TransferCompletedComponent } from './Views/Desktop/TransferViews/transfer-completed/transfer-completed.component';
import { TooltipDirective } from './Bloc/Directives/Tooltip/tooltip.directive';
import {MatMenuModule} from "@angular/material/menu";
import { ErrorWindowComponent } from './Views/Desktop/TransferViews/error-window/error-window.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MaterialModuleModule} from "./Views/material-module/material-module.module";
import {MobileModule} from "./Views/Mobile/mobile.module";
import {ClipboardModule} from "@angular/cdk/clipboard";
import {aws_exports} from "../aws-exports";
import {Amplify, Auth} from "aws-amplify";
import { WelcomeUserComponent } from './Views/DialogViews/welcome-user/welcome-user.component';
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import { TransferDownloadComponent } from './Views/Desktop/TransferViews/transfer-download/transfer-download.component';
import {PipesModule} from "./Bloc/Pipes/pipes.module";
import {HttpClientModule} from "@angular/common/http";


const isLocalhost = Boolean(
  window.location.hostname === "localhost" ||
  // [::1] is the IPv6 localhost address.
  window.location.hostname === "[::1]" ||
  // 127.0.0.1/8 is considered localhost for IPv4.
  window.location.hostname.match(
    /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
  )
);

// Assuming you have two redirect URIs, and the first is for localhost and second is for production
const [
  localRedirectSignIn,
  productionRedirectSignIn,
] = aws_exports.oauth.redirectSignIn.split(",");

const [
  localRedirectSignOut,
  productionRedirectSignOut,
] = aws_exports.oauth.redirectSignOut.split(",");

const updatedAwsConfig = {
  ...aws_exports,
  oauth: {
    ...aws_exports.oauth,
    redirectSignIn: isLocalhost ? localRedirectSignIn : productionRedirectSignIn,
    redirectSignOut: isLocalhost ? localRedirectSignOut : productionRedirectSignOut,
  }
}


// const updatedAwsConfig = {
//   ...aws_exports,
//   oauth: {
//     ...aws_exports.oauth,
//     redirectSignIn: productionRedirectSignIn,
//     redirectSignOut: productionRedirectSignOut,
//   }
// }



printer(updatedAwsConfig);


Auth.configure(updatedAwsConfig);
Amplify.configure(updatedAwsConfig);

@NgModule({
  declarations: [
    AppComponent,
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule,
        MatButtonModule
    ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [Application],
  bootstrap: [AppComponent]
})
export class AppModule {


}
