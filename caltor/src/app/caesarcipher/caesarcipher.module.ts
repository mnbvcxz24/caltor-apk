import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CaesarcipherPageRoutingModule } from './caesarcipher-routing.module';

import { CaesarcipherPage } from './caesarcipher.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CaesarcipherPageRoutingModule
  ],
  declarations: [CaesarcipherPage]
})
export class CaesarcipherPageModule {}
