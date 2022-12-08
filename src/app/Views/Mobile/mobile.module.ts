import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MSignInComponent} from './msign-in/msign-in.component';
import {MaterialModuleModule} from "../material-module/material-module.module";
import {AppComponent, printer} from "../../app.component";
import {MSignUpComponent} from './msign-up/msign-up.component';
import {AppRoutingModule} from "../../app-routing.module";
import {MHomeComponent} from './mhome/mhome.component';
import {MTransferSelectComponent} from './MTransferViews/mtransfer-select/mtransfer-select.component';
import {MTransferCompletedComponent} from './MTransferViews/mtransfer-completed/mtransfer-completed.component';
import {MTransferUploadComponent} from './MTransferViews/mtransfer-upload/mtransfer-upload.component';
import {MTransferVerifyComponent} from './MTransferViews/mtransfer-verify/mtransfer-verify.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MTransferDownloadComponent} from './MTransferViews/mtransfer-download/mtransfer-download.component';
import {Application} from "../../Bloc/Application/Application";
import {AppState} from "../../Bloc/Application/AppState";
import {AppModule} from "../../app.module";
import {MemUnitsPipe} from "../../Bloc/Pipes/MemUnits/mem-units.pipe";
import {PipesModule} from "../../Bloc/Pipes/pipes.module";
import {DesktopRoutingModule} from "../Desktop/desktop-routing.module";
import {ClipboardModule} from "@angular/cdk/clipboard";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MobileRoutingModule} from "./mobile-routing.module";
import {DesktopModule} from "../Desktop/desktop.module";
import { MTransferOptionSelectComponent } from './MTransferViews/mtransfer-option-select/mtransfer-option-select.component';
import { MLandingComponent } from './mlanding/mlanding.component';
import {ActivatedRoute, Router} from "@angular/router";
import {Session} from "../../Bloc/Application/Session";
import {ProfileModule} from "../Desktop/profile/profile.module";


@NgModule({
  declarations: [
    MSignInComponent,
    MSignUpComponent,
    MHomeComponent,
    MTransferSelectComponent,
    MTransferCompletedComponent,
    MTransferUploadComponent,
    MTransferVerifyComponent,
    MTransferDownloadComponent,
    MTransferOptionSelectComponent,
    MLandingComponent,
  ],
    imports: [
        CommonModule,
        MobileRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModuleModule,
        ClipboardModule,
        MatAutocompleteModule,
        PipesModule,
        DesktopModule,
      ProfileModule
    ],
  bootstrap:[AppComponent]
})
export class MobileModule {

  private appSession = Session.GetInstance();

  constructor(
    private application:Application,
    private router:Router,
    private routerParams:ActivatedRoute
  ) {
    this.application.appState = AppState.SELECT_FILES;

    // printer("Url");
    // printer(this.router.url);
    // printer(this.appSession.transferFiles.files.length);
    // printer(this.appSession.transferFiles.files.length == 0 && this.router.url!='/')
    // if(this.appSession.transferFiles.files.length == 0 && this.router.url!='/'){
    //   this.router.navigateByUrl('')
    // }
  }

}
