import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProfileComponent} from "./profile.component";
import {UserProfileComponent} from "./user-profile/user-profile.component";
import {MyTransfersComponent} from "./my-transfers/my-transfers.component";

const routes: Routes = [
  {
    path:'',
    component:ProfileComponent,
    children:[
      {
        path:'',
        pathMatch:'full',
        component:UserProfileComponent,
      },
      {
        path:'history',
        pathMatch:'full',
        component:MyTransfersComponent,
      },

    ]
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
