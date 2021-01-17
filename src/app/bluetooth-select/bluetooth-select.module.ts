import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BluetoothSelectPageRoutingModule } from './bluetooth-select-routing.module';

import { BluetoothSelectPage } from './bluetooth-select.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BluetoothSelectPageRoutingModule
  ],
  declarations: [BluetoothSelectPage]
})
export class BluetoothSelectPageModule {}
