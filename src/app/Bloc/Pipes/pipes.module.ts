import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RoundPipe} from "./Round/round.pipe";
import {MemUnitsPipe} from "./MemUnits/mem-units.pipe";
import {SafePipe} from "./Safe/safe.pipe";



@NgModule({
  declarations: [
    RoundPipe,
    MemUnitsPipe,
    SafePipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    RoundPipe,
    MemUnitsPipe,
    SafePipe
  ]
})
export class PipesModule { }
