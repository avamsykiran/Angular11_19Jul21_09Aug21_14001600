import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
  { path: 'txn', loadChildren: () => import('./transaction/transaction.module').then(m => m.TransactionModule) },
  { path: 'home', loadChildren: () => import('./commons/commons.module').then(m => m.CommonsModule) },
  { path:'',redirectTo:'/home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
