import { Injectable } from '@angular/core';
import {SQLite, SQLiteObject} from '@ionic-native/sqlite/ngx';
import getTime from 'date-fns/getTime';
import {format} from "date-fns";

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private db: SQLiteObject;

  constructor(private sqlite: SQLite) {
    this.createDB();
    console.log('inserting');
  }

  public createDB() {

     this.sqlite.create({
         name: 'yellowtest',
         location: 'default',
         createFromLocation: 1
    })
        .then((db: SQLiteObject) => {
          this.db = db;
          // this.db.executeSql('DROP TABLE if exists measurements');
          this.db.executeSql(
              'create table if not exists measurements(id INTEGER PRIMARY KEY AUTOINCREMENT , BAC FLOAT(6, 5), note VARCHAR(255), date TIMESTAMP(0)); ' +
              '', [])
              .then(() => {
                  console.log('Executed SQL');
              })
              .catch(e => console.log(e));
        }).catch(e => console.log(e));
  }

  public insertMeasurement(BAC: number, note = '') {
      return this.db.executeSql('INSERT INTO measurements (BAC, note, date) values (' + BAC + ', \'' + note + '\', \'' + format(new Date(), 'yyyy-MM-dd HH:mm:ss').toString() + '\')', [])
          .catch(e => console.log(e));
      }

    public getMeasurements() {
      return this.db.executeSql('SELECT * FROM measurements', [])
          .catch(e => console.log(e));
    }
    public getLastMeasurement() {
        return this.db.executeSql('SELECT * FROM measurements ORDER BY id DESC LIMIT 1', [])
            .catch(e => console.log(e));
    }
}
