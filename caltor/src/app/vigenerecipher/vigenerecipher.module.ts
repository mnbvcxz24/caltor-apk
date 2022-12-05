import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VigenerecipherPageRoutingModule } from './vigenerecipher-routing.module';

import { VigenerecipherPage } from './vigenerecipher.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VigenerecipherPageRoutingModule
  ],
  declarations: [VigenerecipherPage]
})
export class VigenerecipherPageModule {}
