import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UsersListComponent } from './users-list/users-list.component';

const routes: Routes = [
  {path:'dash',component:DashboardComponent},
  {path:'list',component:UsersListComponent},
  {path:'add',component:UserFormComponent},
  {path:'details',component:UserDetailsComponent},
  {path:'',pathMatch:'full',redirectTo:'/dash'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
