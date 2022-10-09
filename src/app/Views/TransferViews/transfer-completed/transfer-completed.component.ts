import { Component, OnInit } from '@angular/core';
import {Application} from "../../../Bloc/Application/Application";
import {Session} from "../../../Bloc/Application/Session";
import {environment} from "../../../../environments/environment";
import {FormControl} from "@angular/forms";
import {printer} from "../../../app.component";

@Component({
  selector: 'transfer-completed',
  templateUrl: './transfer-completed.component.html',
  styleUrls: ['./transfer-completed.component.css']
})
export class TransferCompletedComponent implements OnInit {


  public session:Session = Session.GetInstance();
  sessionLink:FormControl;


  get LinkTransfer(){
    return `${environment.linkTransfer}/${this.session.sessionLink}`
  }

  constructor(
    public application:Application,
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
    this.application.ToggleSelectFilesState()
  }

  OnCopy() {
    printer("Copied Successfully");
  }
}
