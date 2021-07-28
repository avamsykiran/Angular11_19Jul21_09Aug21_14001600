import { Component, OnInit } from '@angular/core';
import { NumberSeriesService } from '../number-series.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  lb: number;
  ub: number;

  nums?: number[];

  err?:string|null;

  isInProgress:boolean;
  doSquares:boolean;
  doEvens:boolean;

  constructor(private nss:NumberSeriesService) {
    this.lb=0;
    this.ub=0;
    this.isInProgress=false;
    this.doSquares=false;
    this.doEvens=false;
  }

  ngOnInit(): void {
  }

  start(){
    this.isInProgress=true;
    this.nums=[];
    this.err=null;

    let ob = null;
    
    if(this.doSquares && this.doEvens) ob= this.nss.generateEvenSquares(this.lb,this.ub);
    else if(this.doEvens) ob = this.nss.generateEvens(this.lb,this.ub);
    else if(this.doSquares) ob = this.nss.generateSquares(this.lb,this.ub);
    else ob = this.nss.generate(this.lb,this.ub);

    ob.subscribe(
      (val) => this.nums?.push(val),
      (err) => {this.err=err;this.isInProgress=false;},
      ()=>this.isInProgress=false
    );
  }
}
