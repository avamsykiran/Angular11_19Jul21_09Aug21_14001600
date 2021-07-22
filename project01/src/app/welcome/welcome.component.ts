import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent{

  userName:string;
  logos:string[];
  logo:string;
  fs:number;

  flag1:boolean;
  flag2:boolean;
  flag3:boolean;

  constructor() { 
    this.userName="Somebody";
    this.logos=["assets/imgs/w1.jpg","assets/imgs/w2.jpg"];
    this.logo=this.logos[0];
    this.fs=14;

    this.flag1=false;
    this.flag2=false;
    this.flag3=false;
  }

  changeImage(){
    if(this.logo===this.logos[0])
      this.logo=this.logos[1];
    else
      this.logo=this.logos[0];
  }
}
