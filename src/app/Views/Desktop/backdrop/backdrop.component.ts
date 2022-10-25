import {
  AfterViewInit,
  Component,
  Directive,
  ElementRef,
  HostListener, Input,
  OnDestroy,
  OnInit, TemplateRef,
  ViewChild, ViewContainerRef
} from '@angular/core';
import {printer} from "../../../app.component";
import {AppAnimations, banners, promotionStyles} from "../../../Bloc/Application/Constants";
import {animate, style, transition, trigger} from "@angular/animations";
import {DomSanitizer} from "@angular/platform-browser";
import {timer} from "rxjs";


@Component({
  selector: 'backdrop',
  templateUrl: './backdrop.component.html',
  styleUrls: ['./backdrop.component.css'],
  animations:AppAnimations
})
export class BackdropComponent implements OnInit,OnDestroy,AfterViewInit {

  @ViewChild("z3DropZone") dropZone!:HTMLElement | null;


  @ViewChild("wallpaper") wallPaper!:ElementRef;

  public count:number = 0;

  timer:number = 2000 * 10;
  private interval!: NodeJS.Timeout;
  public _src: string = banners[this.count];
  private adContainer!: HTMLIFrameElement;

  private wallPaperContainer!:HTMLDivElement;
  private currentFrameOnDisplay!: HTMLIFrameElement;

  get src(){
    return this.sanitize.bypassSecurityTrustResourceUrl(banners[this.count]);
  }


  private CreateDragZoneElement(){
    printer(this.dropZone);
    this.dropZone!.setAttribute("style",
      "visibility: visible;" +
      "display: flex;");
  }

  private RemoveDragZoneElement(){

    this.dropZone!.setAttribute("style","visibility: hidden;" +
      "display: none;");
  }




  constructor(
    private sanitize:DomSanitizer
  ) { }

  ngOnInit(): void {
  }

  private startTimer(){
    this.interval = setInterval(()=>{
      printer(this.wallPaperContainer);
      if(this.wallPaperContainer == undefined){
        this.wallPaperContainer = this.wallPaper.nativeElement;
        this.addFrame();
      }
      else{
        printer(this.count);
        this.RemoveFrame();
        this.count++;
        this.count%=banners.length;
        // setTimeout(()=>{
        //   this.addFrame();
        // },1000);
      }

    },this.timer);
  }

  ngAfterViewInit() {

    this.wallPaperContainer = this.wallPaper.nativeElement;

    //Sets Control to drop as well as pointer events in IFrame

    this.wallPaperContainer.addEventListener('transitionend',()=>{

      printer("Transition End");
      // this.currentFrameOnDisplay.remove();
      this.addFrame();

    });

    this.addFrame();

    this.startTimer();

  }


  addFrame(){

    printer("Action : Adding Frame");

    if(this.wallPaperContainer.children.length>0){
      this.wallPaperContainer.innerHTML = '';
    }

    this.wallPaperContainer.classList.remove("wallpaper-container-exit");
    this.wallPaperContainer.classList.add("wallpaper-container-enter");


    this.currentFrameOnDisplay = this.getFrame();

    this.wallPaperContainer.appendChild(this.currentFrameOnDisplay);


    this.dropZone = document!.getElementById("z3-drop-zone");
    let frame = document.getElementById("ad-container") as HTMLIFrameElement;
    let iframe = frame.contentWindow;
    this.adContainer = frame;
    this.adContainer.src = banners[this.count];
    iframe!.onload = ()=>{
      printer("Iframe");

      iframe!.document.ondrag = (event)=>{
        event.preventDefault();
      }

      iframe!.document.ondragover = (event)=>{
        printer("Iframe Drag Over");
        event.preventDefault();


        this.CreateDragZoneElement();
      }

      iframe!.document.ondragstart = (event)=>{
        event.preventDefault();

      }

      iframe!.document.ondrop = (event)=>{
        event.preventDefault();
      }
    }
  }

  RemoveFrame(){
    printer("Action : Removing Latest Child");
    if(this.currentFrameOnDisplay==undefined){
      if(this.wallPaperContainer.children.length == 0){
        return;
      }
      this.currentFrameOnDisplay = this.wallPaperContainer.children.namedItem("ad-container") as HTMLIFrameElement;
    }

    this.wallPaperContainer.classList.add("wallpaper-container-exit");
    this.wallPaperContainer.classList.remove("wallpaper-container-enter")


  }

  getFrame(){
    let frame = document.createElement('iframe');

    frame.src = banners[this.count];

    frame.id = "ad-container";
    frame.width='100%';
    frame.height='100%';
    frame.classList.add('wallpaper-container-iframe');

    return frame

  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }


  SampleFunction() {
    printer("Clicked");
  }

  OnMouseEnter(event: MouseEvent) {
    printer("Mouse")
    printer(event)
  }

  DragEvent() {
    printer("Drag Enter from New")
  }

}
