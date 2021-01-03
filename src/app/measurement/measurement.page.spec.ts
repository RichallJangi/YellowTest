import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MeasurementPage } from './measurement.page';

describe('MeasurementPage', () => {
  let component: MeasurementPage;
  let fixture: ComponentFixture<MeasurementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeasurementPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MeasurementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
