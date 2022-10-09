import { Component, OnInit } from '@angular/core';
import {Application} from "../../../Bloc/Application/Application";

@Component({
  selector: 'error-window',
  templateUrl: './error-window.component.html',
  styleUrls: ['./error-window.component.css']
})
export class ErrorWindowComponent implements OnInit {

  constructor(public application:Application) { }

  ngOnInit(): void {
  }

  Reload() {
    location.reload();
  }
}
