import {Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {printer} from "../../../app.component";
import {AppAnimations} from "../../../Bloc/Application/Constants";
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'backdrop',
  templateUrl: './backdrop.component.html',
  styleUrls: ['./backdrop.component.css'],
  animations:[
    trigger("fadeInOut",[
      transition("* => void",[
        style({
          opacity:1
        }),
        animate("500ms ease-in", style({
          opacity:0
        }))
      ]),
      transition("void => *",[
        style({
          opacity:0
        }),
        animate("500ms 1s ease-in", style({
          opacity:1
        }))
      ])
    ])

  ]
})
export class BackdropComponent implements OnInit,OnDestroy {

  @ViewChild("z3DropZone") dropZone!:ElementRef;

  count:number = 0;

  timer:number = 1000 * 10;
  private interval!: NodeJS.Timeout;


  private CreateDragZoneElement(){

    this.dropZone.nativeElement.setAttribute("style",
      "visibility: visible;" +
      "display: flex;");
  }


  constructor() { }

  ngOnInit(): void {
    this.interval = setInterval(()=>{
      this.count++;
      this.count%=2;
    },this.timer);

  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }


  SampleFunction() {
    printer("Clicked");
  }
}
