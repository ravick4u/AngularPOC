import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppstepperComponent } from './appstepper.component';

describe('AppstepperComponent', () => {
  let component: AppstepperComponent;
  let fixture: ComponentFixture<AppstepperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppstepperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppstepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
