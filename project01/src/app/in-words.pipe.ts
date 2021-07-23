import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inWords'
})
export class InWordsPipe implements PipeTransform {

  digits:string[];

  constructor(){
    this.digits=[
      "ZERO","ONE","TWO","THREE",
      "FOUR","FIVE","SIX","SEVEN",
      "EIGHT","NINE"
    ];
  }

  transform(value: number): string {
    let result:string='';

    let str=`${value}`;

    for(let i=0;i<str.length;i++){
      let ch = str[i];
      if(ch==='.')
        result += "dot ";
      else{
        result += this.digits[parseInt(ch)] + " ";
      }
    }

    return result;
  }

}
