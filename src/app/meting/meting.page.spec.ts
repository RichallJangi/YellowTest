import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MetingPage } from './meting.page';

describe('MetingPage', () => {
  let component: MetingPage;
  let fixture: ComponentFixture<MetingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MetingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
