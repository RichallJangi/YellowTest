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

  constructor(public bluetooth: BluetoothService, public nav: IonNav, public ngZone: NgZone) {

   let value: number = 240;
     let adviesEen: boolean =  false;
     let adviesTwee: boolean = false;
     let adviesDrie: boolean = false;
     let adviesVier: boolean = false;
     let adviesVijf: boolean = false;

     if(value<200)
       {
           adviesEen = true;
       }

     if (value>=200 && value<280)
       {
           adviesTwee = true;
       }
       if (value>=280 && value<350)
       {
           adviesDrie = true;
       }
       if (value>=350 && value <450)
       {
           adviesVier = true;
       }
       if(value>450)
       {
          adviesVijf = true ;
       }

     }





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
