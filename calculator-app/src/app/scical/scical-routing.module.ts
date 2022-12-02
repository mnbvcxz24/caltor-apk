import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScicalPage } from './scical.page';

const routes: Routes = [
  {
    path: '',
    component: ScicalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScicalPageRoutingModule {}
