import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageBoxComponent } from './message-box/message-box.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MessageBoxComponent, NavBarComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    MessageBoxComponent,
    NavBarComponent
  ]
})
export class WidgetModule { }
