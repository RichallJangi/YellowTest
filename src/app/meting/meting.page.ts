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

  constructor(public bluetooth: BluetoothService, public nav: IonNav, public ngZone: NgZone) { }

  ngOnInit() {
  }

  startMeasurement() {
    if (this.bluetooth.isConnected()) {
      this.bluetooth.subscribe().subscribe((abv) => {
        this.ngZone.run(() => {
          this.abvDisplay = abv;
        });
        console.log('update: ' + this.abvDisplay);
      });
    } else {
      this.nav.push(this.connectPage);
    }
  }

}
