import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MetingPageRoutingModule } from './meting-routing.module';

import { MetingPage } from './meting.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MetingPageRoutingModule
  ],
  declarations: [MetingPage]
})
export class MetingPageModule {}
