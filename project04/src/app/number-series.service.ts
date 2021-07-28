import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { map,filter} from 'rxjs/operators' ;

@Injectable({
  providedIn: 'root'
})
export class NumberSeriesService {

  constructor() { }

  generate(lb:number,ub:number):Observable<number>{

    const job = (observer:Observer<number>) => {
      if(lb>ub){
        observer.error("Can not generate for the given limits");
        return;
      }

      let val=lb;

      let handle = setInterval(()=>{
        observer.next(val);
        val++;
        if(val>ub){
          clearInterval(handle);
          observer.complete();
        }
      },500);
    };

    return new Observable<number>(job);
  }

  generateEvens(lb:number,ub:number):Observable<number>{
    let oldOb = this.generate(lb,ub);
    let newOb = oldOb.pipe(
      filter(ele => ele%2==0)
    );
    return newOb;
  }

  generateSquares(lb:number,ub:number):Observable<number>{
    let oldOb = this.generate(lb,ub);
    let newOb = oldOb.pipe(
      map(ele => Math.pow(ele,2))
    );
    return newOb;
  } 
  
  generateEvenSquares(lb:number,ub:number):Observable<number>{
    let oldOb = this.generate(lb,ub);
    let newOb = oldOb.pipe(
      filter(ele => ele%2==0),
      map(ele => Math.pow(ele,2))
    );
    return newOb;
  }

}
