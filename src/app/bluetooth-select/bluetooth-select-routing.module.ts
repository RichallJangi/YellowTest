import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BluetoothSelectPage } from './bluetooth-select.page';

const routes: Routes = [
  {
    path: '',
    component: BluetoothSelectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BluetoothSelectPageRoutingModule {}
