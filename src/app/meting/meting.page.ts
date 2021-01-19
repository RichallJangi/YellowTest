import {Component, NgZone, OnInit} from '@angular/core';
import {BluetoothService} from '../services/bluetooth.service';
import {IonNav} from '@ionic/angular';
import {BluetoothSelectPage} from '../bluetooth-select/bluetooth-select.page';
import {stringify} from 'querystring';
import {DatabaseService} from '../services/database.service';

@Component({
  selector: 'app-meting',
  templateUrl: './meting.page.html',
  styleUrls: ['./meting.page.scss'],
})
export class MetingPage implements OnInit {
  connectPage = BluetoothSelectPage;

  abvDisplay = 'N/A';
  isMeasuring = 0;
  measurementCount: number;

  adviesEen =  false;
  adviesTwee = false;
  adviesDrie = false;
  adviesVier = false;
  adviesVijf = false;

  constructor(public bluetooth: BluetoothService, public nav: IonNav, public ngZone: NgZone, public database: DatabaseService) {
     }

  ngOnInit() {
  }

  startMeasurement() {
    if (this.bluetooth.isConnected()) {
      this.measurementCount = 0;
      this.bluetooth.subscribe().subscribe((abv) => {
        this.ngZone.run(() => {
          this.abvDisplay = abv;
          this.setAdvice(abv);
          this.measurementCount += parseFloat(abv);
          this.isMeasuring++;
          if (this.isMeasuring >= 10) {
            const measurement = this.measurementCount / this.isMeasuring;
            console.log('' + this.measurementCount + ' / ' + this.isMeasuring + ' = ' + measurement);
            this.abvDisplay = stringify(measurement);
            this.database.insertMeasurement(measurement, 'feature not yet implemented');
            this.isMeasuring = 0;
            this.setAdvice(measurement);
            this.bluetooth.unsubscribe();
            console.log('finished measuring');
          }
        });
        console.log('update: ' + this.abvDisplay);
      });
    } else {
      this.nav.push(this.connectPage);
    }
  }

  setAdvice(value) {
    if (value < 200 )
    {
      this.adviesEen = true;
    }

    if (value >= 200 && value < 280)
    {
      this.adviesTwee = true;
    }
    if (value >= 280 && value < 350)
    {
      this.adviesDrie = true;
    }
    if (value >= 350 && value < 450)
    {
      this.adviesVier = true;
    }
    if (value > 450 )
    {
      this.adviesVijf = true ;
    }
  }

}
