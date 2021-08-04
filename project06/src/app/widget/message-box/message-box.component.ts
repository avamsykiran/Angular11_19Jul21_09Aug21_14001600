import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.css']
})
export class MessageBoxComponent implements OnChanges {

  @Input()
  message?:string;

  @Input()
  type?:string;

  isClosed:boolean;
  constructor() { 
    this.isClosed=false;
  }

  ngOnChanges():void {
    this.isClosed=!this.message;
  }

  close(){
    this.isClosed=true;   
  }
}
