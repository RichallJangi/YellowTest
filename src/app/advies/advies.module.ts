import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdviesPageRoutingModule } from './advies-routing.module';

import { AdviesPage } from './advies.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdviesPageRoutingModule
  ],
  declarations: [AdviesPage]
})
export class AdviesPageModule {}
