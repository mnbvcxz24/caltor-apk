import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AtbashcipherPage } from './atbashcipher.page';

const routes: Routes = [
  {
    path: '',
    component: AtbashcipherPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AtbashcipherPageRoutingModule {}
