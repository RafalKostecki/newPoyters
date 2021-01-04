import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductLinksComponent } from './product-links.component';

describe('ProductLinksComponent', () => {
  let component: ProductLinksComponent;
  let fixture: ComponentFixture<ProductLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductLinksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
