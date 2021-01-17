import {Component, OnInit, NgZone} from '@angular/core';
import { BLE } from '@ionic-native/ble/ngx';
import {IonNav, NavController, ToastController} from '@ionic/angular';
import { Router } from '@angular/router';
import {BluetoothService} from '../services/bluetooth.service';

@Component({
  selector: 'app-bluetooth-select',
  templateUrl: './bluetooth-select.page.html',
  styleUrls: ['./bluetooth-select.page.scss'],
})
export class BluetoothSelectPage implements OnInit {
  devices: any[] = [];
  statusMessage: string;
  deviceMode = true;

  constructor(
      public navCtrl: NavController,
      public router: Router,
      private toastCtrl: ToastController,
      private ble: BLE,
      private ngZone: NgZone,
      private bluetoothService: BluetoothService,
      private nav: IonNav,

  ) {}

  ngOnInit() {
    this.scan();
  }

  scan() {
    this.setStatus('Scanning for Bluetooth LE Devices');
    this.devices = []; // clear list

    this.ble.scan([], 5).subscribe(
        device => this.onDeviceDiscovered(device),
        error => this.scanError(error)
    );

    setTimeout(this.setStatus.bind(this), 5000, 'Scan complete');
  }

  onDeviceDiscovered(device) {
    console.log('Discovered ' + JSON.stringify(device, null, 2));
    this.ngZone.run(() => {
      this.devices.push(device);
      console.log(device.name);
    });
    if (device.name === 'YellowTest') {
      this.deviceSelected(device);
    }
  }

  // If location permission is denied, you'll end up here
  async scanError(error) {
    this.setStatus('Error ' + error);
    const toast = await this.toastCtrl.create({
      message: 'Error scanning for Bluetooth low energy devices',
      position: 'middle',
      duration: 5000
    });
    toast.present();
  }

  setStatus(message) {
    console.log(message);
    this.ngZone.run(() => {
      this.statusMessage = message;
    });
  }

  deviceSelected(device: any) {
    console.log(JSON.stringify(device) + ' selected');
    this.bluetoothService.BleConnect(device).subscribe( () => {
      this.nav.pop();
    });
  }


}

