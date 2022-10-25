import {Directive, Input, TemplateRef, ViewContainerRef} from "@angular/core";
import {printer} from "../../../app.component";
import {DomSanitizer} from "@angular/platform-browser";
import {banners} from "../../Application/Constants";

@Directive({
  selector: '[ifChanges]'
})
export class IfChangesDirective {
  private currentValue: any;
  private hasView = false;


  private current:any;

  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<HTMLIFrameElement>,
    protected _sanitizer: DomSanitizer
  ) { }

  @Input() set ifChanges(val: any) {

    printer(this.viewContainer.element.nativeElement.parentElement.firstChild);
    printer(this.viewContainer.element.nativeElement.parentElement.firstChild.src);
    if(val === this.currentValue){
      printer("Found Duplicate");
      return;
    }
    if (!this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
      this.templateRef.elementRef.nativeElement.parentElement.firstChild.src = banners[val];
    } else if (val !== this.currentValue) {
      this.viewContainer.clear();
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.currentValue = val;
      this.templateRef.elementRef.nativeElement.parentElement.firstChild.src = banners[val];

    }
  }
}
