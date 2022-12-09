import { Pipe, PipeTransform } from '@angular/core';
import {max} from "rxjs";

@Pipe({
  name: 'ShortifyText'
})
export class ShortifyTextPipe implements PipeTransform {

  transform(value: any, maxLength:number = 12): string {

    value = String(value);
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
