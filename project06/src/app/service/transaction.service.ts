import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Transaction } from '../shared/transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  TXN_API:string;

  constructor(private http:HttpClient) { 
    this.TXN_API=environment.txnsApi;
  }

  getAllByUserId(uid:number):Observable<Transaction[]>{
    return this.http.get<Transaction[]>(`${this.TXN_API}?userId=${uid}`);
  }

  add(txn:Transaction):Observable<Transaction>{
    return this.http.post<Transaction>(this.TXN_API,txn);
  }

  update(txn:Transaction):Observable<Transaction>{
    return this.http.put<Transaction>(`${this.TXN_API}/${txn.id}`,txn);
  }

  delete(txnId:number):Observable<void>{
    return this.http.delete<void>(`${this.TXN_API}/${txnId}`);
  }
}
