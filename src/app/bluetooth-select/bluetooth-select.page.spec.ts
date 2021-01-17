import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BluetoothSelectPage } from './bluetooth-select.page';

describe('BluetoothSelectPage', () => {
  let component: BluetoothSelectPage;
  let fixture: ComponentFixture<BluetoothSelectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BluetoothSelectPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BluetoothSelectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
