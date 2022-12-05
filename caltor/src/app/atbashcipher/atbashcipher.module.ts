import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AtbashcipherPageRoutingModule } from './atbashcipher-routing.module';

import { AtbashcipherPage } from './atbashcipher.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AtbashcipherPageRoutingModule
  ],
  declarations: [AtbashcipherPage]
})
export class AtbashcipherPageModule {}
