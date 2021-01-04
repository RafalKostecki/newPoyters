import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSystemRequirementsComponent } from './product-system-requirements.component';

describe('ProductSystemRequirementsComponent', () => {
  let component: ProductSystemRequirementsComponent;
  let fixture: ComponentFixture<ProductSystemRequirementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductSystemRequirementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSystemRequirementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
