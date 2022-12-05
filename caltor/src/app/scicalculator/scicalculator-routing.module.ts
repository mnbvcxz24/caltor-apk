import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScicalculatorPage } from './scicalculator.page';

const routes: Routes = [
  {
    path: '',
    component: ScicalculatorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScicalculatorPageRoutingModule {}
