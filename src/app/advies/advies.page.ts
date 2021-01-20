import {Component, NgZone, OnInit} from '@angular/core';
import {DatabaseService} from '../services/database.service';

@Component({
  selector: 'app-advies',
  templateUrl: './advies.page.html',
  styleUrls: ['./advies.page.scss'],
})
export class AdviesPage implements OnInit {
  constructor(private database: DatabaseService, private zone: NgZone) {}
  advies = 'wordt ingelezen';
  meting = 'wordt ingelezen';
  adviesEen =  false;
  adviesTwee = false;
  adviesDrie = false;
  adviesVier = false;
  adviesVijf = false;


  ngOnInit() {
      this.database.getLastMeasurement().then((data) => {
          let measurement;
          for (let i = 0; i < data.rows.length; i++) {
              measurement = data.rows.item(i);
          }
          this.setAdvice(measurement.BAC);
          this.meting = measurement.BAC;
          console.log('the measurement is ' + JSON.stringify(measurement));
          console.log('' + this.adviesEen + this.adviesTwee + this.adviesDrie + this.adviesVier + this.adviesVijf);
      });
  }

   setAdvice(value) {
      this.zone.run(() => {
          if (value < 200 )
          {
            this.advies = 'Nuchter';
          }
          if (value >= 200 && value < 280)
          {
            this.advies = 'Neem nog een glaasje';
          }
          if (value >= 280 && value < 350)
          {
            this.advies = 'Oke nog eentje dan';
          }
          if (value >= 350 && value < 450)
          {
            this.advies = 'Gaat fout';
          }
          if (value > 450 )
          {
            this.advies = 'Ladderzat' ;
          }
      });
    }

}
