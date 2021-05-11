import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferMoreComponent } from './offer-more.component';

describe('OfferMoreComponent', () => {
  let component: OfferMoreComponent;
  let fixture: ComponentFixture<OfferMoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferMoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
