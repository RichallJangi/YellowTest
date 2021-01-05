import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdviesPage } from './advies.page';

const routes: Routes = [
  {
    path: '',
    component: AdviesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdviesPageRoutingModule {}
