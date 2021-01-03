import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeasurementPage } from './measurement.page';

const routes: Routes = [
  {
    path: '',
    component: MeasurementPage
  },
  {
    path: 'index',
    loadChildren: () => import('../index/index.module').then(m => m.IndexPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeasurementPageRoutingModule {}
