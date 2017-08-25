import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertTwoComponent } from './alert-two.component';

describe('AlertTwoComponent', () => {
  let component: AlertTwoComponent;
  let fixture: ComponentFixture<AlertTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
