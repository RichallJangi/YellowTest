import { Component, OnInit } from '@angular/core';
import {IonNav} from '@ionic/angular';

@Component({
  selector: 'app-measurement',
  templateUrl: './measurement.page.html',
  styleUrls: ['./measurement.page.scss'],
})
export class MeasurementPage implements OnInit {

  constructor(public nav: IonNav) { }

  ngOnInit() {
  }

}
