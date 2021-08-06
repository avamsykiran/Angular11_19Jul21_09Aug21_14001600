import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TransactionService } from 'src/app/service/transaction.service';
import { UserService } from 'src/app/service/user.service';
import { Transaction } from 'src/app/shared/transaction';

@Component({
  selector: 'app-txn-form',
  templateUrl: './txn-form.component.html',
  styleUrls: ['./txn-form.component.css']
})
export class TxnFormComponent implements OnInit {

  txnForm: FormGroup;

  title: FormControl;
  amount: FormControl;
  type: FormControl;

  errMsg?:string;
  
  constructor(private txnService:TransactionService,private userService:UserService,private router:Router) {
    this.title=new FormControl('',[Validators.required]);
    this.amount=new FormControl(0,[Validators.required]);
    this.type=new FormControl('',[Validators.required]);

    this.txnForm=new FormGroup({
      title:this.title,
      type:this.type,
      amount:this.amount
    })
  }

  ngOnInit(): void {
  }

  addTxn(){
    let txn:Transaction = {...this.txnForm.value,dot:new Date(),userId:this.userService.getCurrentUser()?.id};
    this.txnService.add(txn).subscribe(
      data => this.router.navigateByUrl("/txn/list"),
      err => this.errMsg="Unable to save the transaction"
    );
  }
}
