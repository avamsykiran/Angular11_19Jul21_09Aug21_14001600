import { Component, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/service/transaction.service';
import { UserService } from 'src/app/service/user.service';
import { Transaction } from 'src/app/shared/transaction';

@Component({
  selector: 'app-txn-list',
  templateUrl: './txn-list.component.html',
  styleUrls: ['./txn-list.component.css']
})
export class TxnListComponent implements OnInit {

  txns?:Transaction[];
  errMsg?:string;
  msg?:string;

  constructor(private txnService:TransactionService,private userService:UserService) { 
    this.msg="Please wait while loading..";
  }

  ngOnInit(): void {

    let uid = this.userService.getCurrentUser()?.id;
    this.txnService.getAllByUserId(uid?uid:0).subscribe(
      data=>{
        if(data && data.length>0){
          this.txns=data;
          this.msg=undefined;
        }else{
          this.txns=undefined;
          this.msg="No records to display as of now";
        }
          
      },err => this.errMsg="Sorry Unable to retrive data"
    );
  }

}
