import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sayok1(){
    alert("First message box ok is clicked");
  }

  sayok2(){
    alert("second message box ok is clicked");
  }
}
