import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TooltipDirective} from "./Tooltip/tooltip.directive";
import {ScrollOnViewDirective} from "./ScrollOnView/scroll-on-view.directive";



@NgModule({
  declarations: [
    TooltipDirective,
    ScrollOnViewDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    TooltipDirective,
    ScrollOnViewDirective
  ]
})
export class DirectiveModule { }
