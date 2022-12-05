import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VigenerecipherPage } from './vigenerecipher.page';

const routes: Routes = [
  {
    path: '',
    component: VigenerecipherPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VigenerecipherPageRoutingModule {}
