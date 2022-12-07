import { Component, OnInit } from '@angular/core';
import {Application} from "../../../../Bloc/Application/Application";
import {Router} from "@angular/router";

@Component({
  selector: 'error-window',
  templateUrl: './error-window.component.html',
  styleUrls: ['./error-window.component.css']
})
export class ErrorWindowComponent implements OnInit {

  constructor(
    public application:Application,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  Reload() {
    this.router.navigateByUrl('').then(()=>{
      location.reload();
    });


  }
}
