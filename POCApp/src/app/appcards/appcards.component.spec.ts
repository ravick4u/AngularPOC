import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppcardsComponent } from './appcards.component';

describe('AppcardsComponent', () => {
  let component: AppcardsComponent;
  let fixture: ComponentFixture<AppcardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppcardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
