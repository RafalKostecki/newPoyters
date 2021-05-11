import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferDevelopmentComponent } from './offer-development.component';

describe('OfferDevelopmentComponent', () => {
  let component: OfferDevelopmentComponent;
  let fixture: ComponentFixture<OfferDevelopmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferDevelopmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
