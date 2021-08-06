import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionRoutingModule } from './transaction-routing.module';
import { TransactionComponent } from './transaction.component';
import { WidgetModule } from '../widget/widget.module';
import { TxnListComponent } from './txn-list/txn-list.component';
import { TxnFormComponent } from './txn-form/txn-form.component';


@NgModule({
  declarations: [TransactionComponent, TxnListComponent, TxnFormComponent],
  imports: [
    CommonModule,
    TransactionRoutingModule,
    WidgetModule
  ]
})
export class TransactionModule { }
