import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WelcomeService {

  constructor() { }

  greet(unm:string|null){
    let greeting:string;
    if(unm==null)
      greeting="Hello Somebody";
    else
      greeting="Hello "+unm;

    return greeting;
  }
}
