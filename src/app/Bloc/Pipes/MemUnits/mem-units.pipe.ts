import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'memUnits'
})
export class MemUnitsPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
