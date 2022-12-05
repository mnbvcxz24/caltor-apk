import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScicalculatorPageRoutingModule } from './scicalculator-routing.module';

import { ScicalculatorPage } from './scicalculator.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScicalculatorPageRoutingModule
  ],
  declarations: [ScicalculatorPage]
})
export class ScicalculatorPageModule {}
