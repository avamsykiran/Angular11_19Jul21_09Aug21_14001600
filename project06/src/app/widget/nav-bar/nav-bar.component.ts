import { Component, Input,EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  @Input()
  brand?:string;
  
  @Input()
  links?:string[][];

  @Input()
  showLogout?:boolean;

  @Output()
  logoutClicked:EventEmitter<void>;

  constructor() { 
    this.logoutClicked=new EventEmitter<void>();
  }

  logout(){
    this.logoutClicked.emit();
  }
}
