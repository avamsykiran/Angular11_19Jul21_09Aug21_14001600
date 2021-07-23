import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'adjust'
})
export class AdjustPipe implements PipeTransform {

  transform(value: string, expectedLength:number): string|null {

    let result = value;

    if(result.length>expectedLength){
        result = value.substr(0,expectedLength);
    }else if(result.length<expectedLength){
        for(let i=1;i<=expectedLength-value.length;i++)
          result += "*";
    }

    return result;
  }

}
