import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {AppComponent, printer} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule} from "@angular/material/button";
import {Application} from "./Bloc/Application/Application";
import {aws_exports} from "../aws-exports";
import {Amplify, Auth} from "aws-amplify";
import {HttpClientModule} from "@angular/common/http";
import {environment} from "../environments/environment";



const isLocalhost = !(environment.production);

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
        MatButtonModule,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [Application],
    exports: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule {


  constructor() {
    let hostname = window.location.href;

    if(hostname.includes("www.")){
      let url = "https://" + hostname.split("www.").pop()
      window.open(url,"_self");
    }
  }

}
