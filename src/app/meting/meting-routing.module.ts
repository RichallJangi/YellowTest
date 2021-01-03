import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MetingPage } from './meting.page';

const routes: Routes = [
  {
    path: '',
    component: MetingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MetingPageRoutingModule {}
