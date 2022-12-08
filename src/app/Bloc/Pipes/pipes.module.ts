import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RoundPipe} from "./Round/round.pipe";
import {MemUnitsPipe} from "./MemUnits/mem-units.pipe";
import {SafePipe} from "./Safe/safe.pipe";
import { MimeTypeIconPipe } from './MimeTypeIcon/mime-type-icon.pipe';
import { ShortifyTextPipe } from './ShortifyText/shortify-text.pipe';
import { NonNullableTextPipe } from './NonNullableText/non-nullable-text.pipe';



@NgModule({
  declarations: [
    RoundPipe,
    MemUnitsPipe,
    SafePipe,
    MimeTypeIconPipe,
    ShortifyTextPipe,
    NonNullableTextPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RoundPipe,
    MemUnitsPipe,
    SafePipe,
    MimeTypeIconPipe,
    ShortifyTextPipe,
    NonNullableTextPipe
  ]
})
export class PipesModule { }
