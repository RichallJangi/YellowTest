import { Component, OnInit } from '@angular/core';
import {MeasurementPage} from '../measurement/measurement.page';
import {IonNav} from '@ionic/angular';
import {SQLite, SQLiteObject} from '@ionic-native/sqlite/ngx';
import {DatabaseService} from '../services/database.service';
import {format} from 'date-fns';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {
  public measurementPage = MeasurementPage;
  public db: SQLiteObject;
  public error = 'nothing yet';
  public measurements;

  constructor(public nav: IonNav, public sqlite: SQLite, public database: DatabaseService) { }

  ngOnInit() {
  }

  public loadData() {
    this.database.getMeasurements().then((data) => {
        console.log(data.rows.length);
        console.log('got the measurements');
        this.measurements = [];
        for (let i = 0; i < data.rows.length; i++) {
          this.measurements.push(data.rows.item(i));
        }
        this.error = format(new Date(), 'yyyy-MM-dd HH:mm:ss');
    });
  }

  insertData() {
    this.database.insertMeasurement(0.69, 'an empty string')
        .finally(() => {console.log('there is something in the database'); });
  }

}
