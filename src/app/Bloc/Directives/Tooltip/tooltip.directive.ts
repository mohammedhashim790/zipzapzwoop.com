import {ChangeDetectorRef, Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {printer} from "../../../app.component";
import {tooltip} from "aws-amplify";
import {animate, AnimationBuilder, style, transition, trigger} from "@angular/animations";


export interface TooltipParams{
  tooltipText: string;
  tooltipAlign:"left" | "right" | "top" | "bottom";
  ShowOnStart?:boolean;
  dismissIn?:number;
}

@Directive({
  selector: '[Tooltip]',
  exportAs:"Tooltip"
})
export class TooltipDirective implements OnInit,OnChanges{

  @Input() tooltipText!:string;

  @Input() tooltipAlign:"left" | "right" | "top" | "bottom" = "top";
  @Input() ShowOnStart:boolean = false;
  @Input() dismissIn:number = 5000;




  private _styles:string =
    "min-width: 200px;" +
    "max-width: 200px;" +
    "min-height: 30px;" +
    "background: rgb(0,0,0,0.7);" +
    "color: white;" +
    "position: absolute;" +
    "font-size: 0.7em;" +
    "padding: 0.5em;" +
    "transform: translateX(-50%);" +
    "border-radius: 1em;" +
    "display: flex;" +
    "flex-direction: column;" +
    "justify-content: center;" +
    "place-items: center;" +
    "z-index:30;" +
    "visibility: hidden;";
  private tooltipElement: HTMLSpanElement | undefined;
  private timeout: NodeJS.Timeout | undefined;



  constructor(
    private element:ElementRef,
    private _animationBuilder:AnimationBuilder,
    private changeDetectorRef: ChangeDetectorRef
  ) {
  }

  ngOnInit(): void {
    if(this.ShowOnStart)
      this.Show();

  }

  ngOnChanges(changes: SimpleChanges) {
    printer("Directive Tooltip changes");
    printer(this.tooltipText);
  }


  private add() {

    this.getToolTip();

    if(this.tooltipElement)
      document.body.appendChild(this.tooltipElement);

    this.setProperties();

    printer(this.element.nativeElement.getBoundingClientRect());


    this.timeout = setTimeout(()=>{
      this.Hide() ;
    },this.dismissIn);

  }


  private remove(){
    if(this.tooltipElement != undefined) {
      // this.element.nativeElement.removeChild(this.tooltipElement);
      document.body.removeChild(this.tooltipElement);
      clearTimeout(this.timeout);
      this.tooltipElement = undefined;
    }
  }

  private setPosition(){
    switch (this.tooltipAlign){
      case "left":
        this.leftAlign();
        break;

      case "right":
        this.rightAlign();
        break;

      case "bottom":
        this.bottomAlign();
        break;

      case "top":
        this.topAlign();
        break;
      default:
        this.topAlign();

    }
  }


  private rightAlign(){
    let rect:DOMRect = this.element.nativeElement.getBoundingClientRect();

    let top = rect.top;
    let right = rect.right;

    this._styles+= `top: ${top}px;
    left: ${right + this.tooltipElement!.getBoundingClientRect().width /2}px;
    visibility: visible;`;

    this.tooltipElement!.setAttribute("style",this._styles);
  }


  private topAlign(){
    let rect:DOMRect = this.element.nativeElement.getBoundingClientRect();

    let top = rect.top;
    let left = (rect.right + rect.left)/2 ;

    let tooltipPosition = this.tooltipElement!.getBoundingClientRect();


    this._styles+= `top: ${top - tooltipPosition.height}px;
    left: ${left}px;
    visibility: visible;`;

    this.tooltipElement!.setAttribute("style",this._styles);
  }



  private bottomAlign() {
    let rect:DOMRect = this.element.nativeElement.getBoundingClientRect();

    let bottom = rect.bottom;
    let left = (rect.right + rect.left)/2 ;

    let tooltipPosition = this.tooltipElement!.getBoundingClientRect();


    this._styles+= `top: ${bottom}px;
    left: ${left}px;
    visibility: visible;`;

    this.tooltipElement!.setAttribute("style",this._styles);
  }

  private leftAlign(){
    let rect:DOMRect = this.element.nativeElement.getBoundingClientRect();

    let top = rect.top;
    let left = rect.left;

    this._styles+= `top: ${top}px;
    left: ${left - (this.tooltipElement!.getBoundingClientRect().x + this.tooltipElement!.getBoundingClientRect().width)}px;
    visibility: visible;`;

    this.tooltipElement!.setAttribute("style",this._styles);
  }





  private getToolTip(){
    let element = document.createElement("span");
    if(this.tooltipText.length >= 30){
      this._styles+="padding : 1.5em;"
    }
    element.innerHTML = `${this.Text()}${this.Bubble()}`;

    element.setAttribute("style",this._styles);


    this.tooltipElement = element;

    this.makeAnimation(this.tooltipElement,false);

    document.body.appendChild(this.tooltipElement);


    return element;
  }


  setProperties(){
    this.setPosition();



    printer(this.tooltipElement!.getBoundingClientRect());
    printer(this.tooltipElement);


  }

  get TopPosition(){
    return  this.element.nativeElement.clientHeight ;
  }

  get LeftPosition(){
    return  this.element.nativeElement.clientX ;
  }



  private Bubble(){

    let styles =
      "position: absolute;" +
      "border-top: 5px solid rgb(0,0,0,0.7);" +
      "border-left: 3px solid transparent;" +
      "border-right: 3px solid transparent;"


    function Top(){
      styles+="bottom: -5px;"
    }

    function Left() {
      styles+="right: -5px;transform: rotate(-90deg);"
    }

    function Bottom(){
      styles+="top: -5px;transform: rotate(180deg);"
    }
    function Right(){
      styles+="left: -5px;transform: rotate(90deg);"
    }


  switch (this.tooltipAlign){

    case "top":
      Top();
      break;
    case "right":
      Right();
      break;

    case "left":
      Left();
      break;

    case "bottom":
      Bottom();
      break;
    default:
      Top();

  }



    let element = document.createElement("span");
    element.setAttribute("style",styles);

    return element.outerHTML;
  }

  Show(){
    this.changeDetectorRef.detectChanges();
    this.remove();
    this.add();
  }

  Hide(){
    this.changeDetectorRef.detectChanges();
    this.remove();
  }


  private makeAnimation(element: any,reverse:boolean) {
    // first define a reusable animation

    let animation = [
      style({ opacity: 0 }),
      animate(500, style({ opacity: 1 }))
    ];

    const myAnimation = this._animationBuilder.build(animation);

    // use the returned factory object to create a player
    const player = myAnimation.create(element);

    player.play();
  }

  private Text() {
    let styles = "margin: auto;";
    let element = document.createElement("label");
    element.setAttribute("style",styles);

    printer("Seting Text");
    printer(this.tooltipText);

    element.innerText = this.tooltipText;

    return element.outerHTML;
  }

}

