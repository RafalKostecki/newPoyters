import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioProjectComponent } from './portfolio-project.component';

describe('PortfolioProjectComponent', () => {
  let component: PortfolioProjectComponent;
  let fixture: ComponentFixture<PortfolioProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
