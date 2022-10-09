import { Component, OnInit } from '@angular/core';
import {Application} from "../../../Bloc/Application/Application";

@Component({
  selector: 'transfer-verify',
  templateUrl: './transfer-verify.component.html',
  styleUrls: ['./transfer-verify.component.css']
})
export class TransferVerifyComponent implements OnInit {
  verifying: boolean = false;

  constructor(public application:Application) { }

  ngOnInit(): void {
  }

  VerifyCode() {
    this.verifying = true;
    setTimeout(()=>{
      this.application.nextSlide();
    },2500);

  }
}
