import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppcheckboxComponent } from './appcheckbox.component';

describe('AppcheckboxComponent', () => {
  let component: AppcheckboxComponent;
  let fixture: ComponentFixture<AppcheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppcheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppcheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
