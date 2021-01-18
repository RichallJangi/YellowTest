import {Component, NgZone, OnInit} from '@angular/core';
import {BluetoothService} from '../services/bluetooth.service';
import {IonNav} from '@ionic/angular';
import {BluetoothSelectPage} from '../bluetooth-select/bluetooth-select.page';

@Component({
  selector: 'app-meting',
  templateUrl: './meting.page.html',
  styleUrls: ['./meting.page.scss'],
})
export class MetingPage implements OnInit {
  connectPage = BluetoothSelectPage;

  abvDisplay = 'N/A';

  adviesEen =  false;
  adviesTwee = false;
  adviesDrie = false;
  adviesVier = false;
  adviesVijf = false;

  constructor(public bluetooth: BluetoothService, public nav: IonNav, public ngZone: NgZone) {
     }

  ngOnInit() {
  }

  startMeasurement() {
    if (this.bluetooth.isConnected()) {
      this.bluetooth.subscribe().subscribe((abv) => {
        this.ngZone.run(() => {
          this.abvDisplay = abv;
          this.setAdvice(abv);
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
