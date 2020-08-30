import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppexpansionComponent } from './appexpansion.component';

describe('AppexpansionComponent', () => {
  let component: AppexpansionComponent;
  let fixture: ComponentFixture<AppexpansionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppexpansionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppexpansionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
