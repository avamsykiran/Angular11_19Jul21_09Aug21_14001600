import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.css']
})
export class MessageBoxComponent implements OnInit {

  @Input()
  msgType?:string;

  @Output()
  okClicked:EventEmitter<void>;

  constructor() { 
    this.okClicked=new EventEmitter<void>();
  }

  ngOnInit(): void {
  }

  handleClick(){
    this.okClicked.emit(); //raising our own event.
  }
}
