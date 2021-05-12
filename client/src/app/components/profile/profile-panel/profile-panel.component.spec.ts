import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilPanelComponent } from './profile-panel.component';

describe('ProfilPanelComponent', () => {
  let component: ProfilPanelComponent;
  let fixture: ComponentFixture<ProfilPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
