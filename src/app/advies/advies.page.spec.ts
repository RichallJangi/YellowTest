import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdviesPage } from './advies.page';

describe('AdviesPage', () => {
  let component: AdviesPage;
  let fixture: ComponentFixture<AdviesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdviesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdviesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
