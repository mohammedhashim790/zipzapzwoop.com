import {Directive, ElementRef, HostListener, Input} from '@angular/core';
import {printer} from "../../../app.component";
import {fromEvent} from "rxjs";

@Directive({
  selector: '[ScrollOnView]'
})
export class ScrollOnViewDirective {

  @HostListener("window:scroll",["$event"])
  OnScroll(){
    this.event();
  }

  private viewIn:boolean = false;

  @Input() animatorName:string='';
  @Input() duration:number=0;

  @Input() animationClassName:string = '';
  @Input() scrollRefByParent!:HTMLElement;




  constructor(private elementRef:ElementRef) {
    console.log(this.elementRef);

    document.body.addEventListener('scroll',()=>{
      this.event();
    })
  }

  private OnViewAvailable() {
    this.viewIn = true;
    this.elementRef.nativeElement.classList.add(this.animationClassName);
  }

  private OnViewAway() {
    this.viewIn = false;
    this.elementRef.nativeElement.classList.remove(this.animationClassName);

  }

  private event(){
    var bounding = this.elementRef.nativeElement.getBoundingClientRect();

    if(this.scrollRefByParent!=null){
      bounding = this.scrollRefByParent.getBoundingClientRect();
    }


    printer(bounding);
    printer(this.elementRef.nativeElement);
    if (bounding.top >= 0 && bounding.left >= 0 && bounding.right <= window.innerWidth && bounding.bottom <= window.innerHeight) {
      console.log('Element is in the viewport!');
      if(!this.viewIn)
        this.OnViewAvailable();
    }else{
      if(this.viewIn)
        this.OnViewAway();
    }
  }
}
