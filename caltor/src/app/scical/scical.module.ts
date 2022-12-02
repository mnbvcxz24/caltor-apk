import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScicalPageRoutingModule } from './scical-routing.module';

import { ScicalPage } from './scical.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScicalPageRoutingModule
  ],
  declarations: [ScicalPage]
})
export class ScicalPageModule {}
