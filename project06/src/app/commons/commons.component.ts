import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-commons',
  templateUrl: './commons.component.html',
  styleUrls: ['./commons.component.css']
})
export class CommonsComponent implements OnInit {

  title:string;

  constructor() { 
    this.title=environment.title;
  }

  ngOnInit(): void {
  }

}
