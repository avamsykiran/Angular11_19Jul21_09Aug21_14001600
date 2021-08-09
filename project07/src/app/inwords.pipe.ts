import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inwords'
})
export class InwordsPipe implements PipeTransform {

  digits:string[]=[
    "ZERO","ONE","TWO","THREE",
    "FOUR","FIVE","SIX","SEVEN",
    "EIGHT","NINE"
  ];

  transform(value: number): string {
    let result="";

    let str = `${value}`
    for(let i=0;i<str.length;i++){
      result += this.digits[parseInt(str.charAt(i))] +" ";
    }

    return result;
  }

}
