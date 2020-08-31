import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnakebarComponent } from './snakebar.component';

describe('SnakebarComponent', () => {
  let component: SnakebarComponent;
  let fixture: ComponentFixture<SnakebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnakebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnakebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
