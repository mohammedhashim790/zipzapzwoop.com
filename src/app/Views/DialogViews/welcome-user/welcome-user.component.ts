import {Component, Inject, OnInit, Optional} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {printer} from "../../../app.component";


export interface WelcomeUserParams{
  username:string
}

@Component({
  selector: 'app-welcome-user',
  templateUrl: './welcome-user.component.html',
  styleUrls: ['./welcome-user.component.scss']
})
export class WelcomeUserComponent implements OnInit {

  get Username(){
    return (this.params == null?'Username':this.params.username);
  }

  constructor(
    private router:Router,
    @Optional() public dialogRef:MatDialogRef<any>,
    private routerParams:ActivatedRoute,
    @Optional() @Inject(MAT_DIALOG_DATA) public params:WelcomeUserParams
  ) {
    if(this.params == undefined){
      this.params = {
        username:this.routerParams.snapshot.queryParamMap.get('username') as string,
      }
      printer("From Router");
      printer(this.params);
    }
  }

  ngOnInit(): void {
  }

  navigateTo(path: string) {
    if(this.dialogRef)
      this.dialogRef.close();
    this.router.navigateByUrl(path);
  }
}
