import {Component, HostListener, OnInit} from '@angular/core';
import {Application} from "../../../../Bloc/Application/Application";
import {Session} from "../../../../Bloc/Application/Session";
import {environment} from "../../../../../environments/environment";
import {FormControl} from "@angular/forms";
import {printer} from "../../../../app.component";
import {TransferExpiry} from "../../../../Bloc/Application/ApplicationHelper";
import {isMobile} from "../../../../app-routing.module";
import {Router} from "@angular/router";

@Component({
  selector: 'transfer-completed',
  templateUrl: './transfer-completed.component.html',
  styleUrls: ['./transfer-completed.component.css']
})
export class TransferCompletedComponent implements OnInit {


  public session:Session = Session.GetInstance();
  sessionLink:FormControl;


  get Expiry(){
    return TransferExpiry() * 1000;
  }


  get LinkTransfer(){
    return `${environment.linkTransfer}/${this.session.sessionLink}`
  }

  @HostListener('window:beforeunload', ['$event'])
  beforeunloadHandler(event:BeforeUnloadEvent) {
    // event.preventDefault();
    event.returnValue = true;
  }

  constructor(
    public application:Application,
    private router:Router
  ) {
    this.sessionLink = new FormControl(this.LinkTransfer);
    this.sessionLink.disable();
    printer("Link Transfer");
    printer(this.session.linkTransfer);
  }

  ngOnInit(): void {
  }

  BackToRoot() {
    Session.NewSession();
    if(isMobile()){
      this.router.navigateByUrl('select');
    }else{
      this.application.ToggleSelectFilesState()
    }
  }

  OnCopy() {
    printer("Copied Successfully");
  }
}
