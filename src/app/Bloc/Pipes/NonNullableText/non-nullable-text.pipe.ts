import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'NonNullableText'
})
export class NonNullableTextPipe implements PipeTransform {

  transform(value: any, alternative:string = '<No_Text>'): string {
    if(value == undefined){
      return alternative;
    }
    if((value as string).length == 0 || (value as string) == ""){
      return alternative;
    }
    return value;
  }

}
