import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferConsultingComponent } from './offer-consulting.component';

describe('OfferConsultingComponent', () => {
  let component: OfferConsultingComponent;
  let fixture: ComponentFixture<OfferConsultingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferConsultingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferConsultingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
