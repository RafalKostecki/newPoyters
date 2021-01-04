import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductGetComponent } from './product-get.component';

describe('ProductGetComponent', () => {
  let component: ProductGetComponent;
  let fixture: ComponentFixture<ProductGetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductGetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
