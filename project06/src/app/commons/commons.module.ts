import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonsRoutingModule } from './commons-routing.module';
import { CommonsComponent } from './commons.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WidgetModule } from '../widget/widget.module';


@NgModule({
  declarations: [CommonsComponent, LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    CommonsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    WidgetModule
  ]
})
export class CommonsModule { }
