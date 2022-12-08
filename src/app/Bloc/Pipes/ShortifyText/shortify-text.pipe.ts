import { Pipe, PipeTransform } from '@angular/core';
import {max} from "rxjs";

@Pipe({
  name: 'ShortifyText'
})
export class ShortifyTextPipe implements PipeTransform {

  transform(value: string, maxLength:number = 12): string {

    if(maxLength<12){
      maxLength = 12;
    }
    if(value.length < maxLength){
      return value;
    }
    value = value.slice(0,maxLength);
    return value + "...";

  }

}
