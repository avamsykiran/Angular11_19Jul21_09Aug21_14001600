import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonGuard } from './service/common.guard';
import { TxnGuard } from './service/txn.guard';
import { UserGuard } from './service/user.guard';

const routes: Routes = [
  {
    path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule),
    canActivate: [UserGuard], canLoad: [UserGuard], canActivateChild: [UserGuard]
  },
  {
    path: 'txn', loadChildren: () => import('./transaction/transaction.module').then(m => m.TransactionModule),
    canActivate: [TxnGuard], canLoad: [TxnGuard], canActivateChild: [TxnGuard]
  },
  {
    path: 'home', loadChildren: () => import('./commons/commons.module').then(m => m.CommonsModule),
    canActivate: [CommonGuard], canLoad: [CommonGuard], canActivateChild: [CommonGuard]
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
