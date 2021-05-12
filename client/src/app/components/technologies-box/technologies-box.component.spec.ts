import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologiesBoxComponent } from './technologies-box.component';

describe('TechnologiesBoxComponent', () => {
  let component: TechnologiesBoxComponent;
  let fixture: ComponentFixture<TechnologiesBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnologiesBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologiesBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
