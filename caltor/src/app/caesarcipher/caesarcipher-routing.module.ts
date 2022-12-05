import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CaesarcipherPage } from './caesarcipher.page';

const routes: Routes = [
  {
    path: '',
    component: CaesarcipherPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CaesarcipherPageRoutingModule {}
