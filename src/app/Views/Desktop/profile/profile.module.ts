import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import {Application} from "../../../Bloc/Application/Application";
import {TooltipDirective} from "../../../Bloc/Directives/Tooltip/tooltip.directive";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MaterialModuleModule} from "../../material-module/material-module.module";
import {ClipboardModule} from "@angular/cdk/clipboard";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {PipesModule} from "../../../Bloc/Pipes/pipes.module";
import {MatListModule} from "@angular/material/list";
import {DesktopModule} from "../desktop.module";
import {ProfileComponent} from "./profile.component";
import { UserProfileComponent } from './user-profile/user-profile.component';
import {MatTooltipModule} from "@angular/material/tooltip";
import { MyTransfersComponent } from './my-transfers/my-transfers.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

@NgModule({
  declarations: [
    ProfileComponent,
    UserProfileComponent,
    MyTransfersComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModuleModule,
    ClipboardModule,
    MatAutocompleteModule,
    PipesModule,
    ProfileRoutingModule,
    MatListModule,
    MatTooltipModule,
    FontAwesomeModule,

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [Application],
})
export class ProfileModule { }
