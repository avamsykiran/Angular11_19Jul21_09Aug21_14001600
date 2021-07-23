import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes-demo',
  templateUrl: './pipes-demo.component.html',
  styleUrls: ['./pipes-demo.component.css']
})
export class PipesDemoComponent{

  strData:string;
  numData:number;
  dateData:Date;

  constructor() { 
    this.strData="Hello! I Welcoem you all";
    this.numData=123.4567;
    this.dateData=new Date();
  }

}
