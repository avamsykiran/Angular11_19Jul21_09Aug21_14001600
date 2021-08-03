import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonsRoutingModule } from './commons-routing.module';
import { CommonsComponent } from './commons.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [CommonsComponent, LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    CommonsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CommonsModule { }
