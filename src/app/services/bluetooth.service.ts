import {ToastController} from '@ionic/angular';
import {EventEmitter, Injectable, NgZone} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {throwError} from 'rxjs';
import { BLE } from '@ionic-native/ble/ngx';
import {isEmpty} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class BluetoothService {
    peripheral: any = {};
    connected = false;
    statusMessage: string;
    deviceId = '';
    fetched: string;

    constructor(public route: ActivatedRoute,
                private ble: BLE, private toastCtrl: ToastController,
                private ngZone: NgZone) {

        /*this.route.queryParams.subscribe(params => {
            if (params && params.special) {
                const device = JSON.parse(params.special);
                this.setStatus('Connecting to ' + device.name || device.id);

                // Call BLE Connect - Connect to BLE Device
                this.BleConnect(device);

            }
        });*/
    }

    BleConnect(device): EventEmitter<any> {
        const emitter = new EventEmitter();
        this.deviceId = device.id;
        this.ble.connect(device.id).subscribe(
            peripheral => {
                this.onConnected(peripheral);
                emitter.emit();
            },
            peripheral => this.onDeviceDisconnected(peripheral)
        );
        return emitter;
    }

    BleDisconnect() {
        this.ble.disconnect(this.peripheral.id).then(
            () => console.log('Disconnected ' + JSON.stringify(this.peripheral)),
            () => console.log('ERROR disconnecting ' + JSON.stringify(this.peripheral)));
        this.peripheral = {};
        this.connected = false;
    }


    onConnected(peripheral) {
        this.ngZone.run(() => {
            this.setStatus('');
            this.peripheral = peripheral;
            // this.startNotification();
            this.connected = true;
        });
    }

    startNotification() {
        if (this.peripheral != null) {
            const inputdata = new Uint8Array(3);
            inputdata[0] = 0x2901;
            this.ble.writeWithoutResponse(this.peripheral.id, 'ffe0',
                'ffe1', inputdata
            ).then(
                data => {
                    console.log(data);
                    this.subscribe();
                },
                err => {
                    console.log(err);
                }
            );
        }
    }

    subscribe(): EventEmitter<string> {
        const emitter = new EventEmitter();
        this.ble.startNotification(this.peripheral.id, 'ffe0',
            'ffe1'
        ).subscribe((buffer) => {
            const data = new Uint8Array(buffer);
            const numbers = new Uint8Array(buffer[0]);
            let characters = '';
            for (let i = 0; i < numbers.length; i++) {
                characters += String.fromCharCode(numbers[i]);
            }
            this.fetched = JSON.stringify(data);
            console.log('the data is ' + characters + ' with packet number ' + data[1]);
            emitter.emit(characters);
        }, (err) => {
            alert(err);
            return throwError(err);
        });
        console.log('notifications setup');
        return emitter;
    }

    unsubscribe() {
        if (this.peripheral != null) {
            this.ble.stopNotification(this.peripheral.id, 'ffe0',
                'ffe1');
        }
    }

    async onDeviceDisconnected(peripheral) {
        const toast = await this.toastCtrl.create({
            message: 'The peripheral unexpectedly disconnected',
            duration: 3000,
            position: 'middle'
        });
        toast.present();
    }

    // Disconnect peripheral when leaving the page
    ionViewWillLeave() {
        console.log('ionViewWillLeave disconnecting Bluetooth');
        this.BleDisconnect();
    }

    setStatus(message) {
        console.log(message);
        this.ngZone.run(() => {
            this.statusMessage = message;
        });
    }

    isConnected(): boolean {
        return this.connected;
    }
}
