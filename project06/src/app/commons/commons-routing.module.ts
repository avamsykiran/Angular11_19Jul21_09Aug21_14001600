import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommonsComponent } from './commons.component';

const routes: Routes = [{ path: '', component: CommonsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommonsRoutingModule { }
