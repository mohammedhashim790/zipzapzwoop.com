import { Pipe, PipeTransform } from '@angular/core';
import {printer} from "../../../app.component";

@Pipe({
  name: 'MemUnits'
})
export class MemUnitsPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    printer(value);
    if(value>=(1024 ** 2) && value<(1024 ** 3)){
      return `${(value / (1024 ** 2)).toFixed(2)} MB `
    }
    else if(value>=(1024 ** 3) && value<(1024 ** 4)){
      return `${(value / (1024 ** 3)).toFixed(2)} GB `;
    }
    return `${(value / 1024).toFixed(2)} KB `;
  }

}
