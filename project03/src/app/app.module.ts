import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MessageBoxComponent } from './message-box/message-box.component';

const routes : Routes =[
  {path:'dash',component:DashboardComponent},
  {path:'list',component:UsersListComponent},
  {path:'add',component:UserFormComponent},
  {path:'details',component:UserDetailsComponent},
  {path:'',pathMatch:'full',redirectTo:'/dash'}
];

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    UserFormComponent,
    UserDetailsComponent,
    DashboardComponent,
    NavBarComponent,
    MessageBoxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
