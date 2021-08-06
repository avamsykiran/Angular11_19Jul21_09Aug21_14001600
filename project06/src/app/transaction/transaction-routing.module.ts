import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransactionComponent } from './transaction.component';
import { TxnFormComponent } from './txn-form/txn-form.component';
import { TxnListComponent } from './txn-list/txn-list.component';

const routes: Routes = [
  { path: '', component: TransactionComponent, children:[
    {path:'list',component:TxnListComponent},
    {path:'add',component:TxnFormComponent},
    {path:'',pathMatch:'full',redirectTo:"list"}
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionRoutingModule { }
