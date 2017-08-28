import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppendHtmlComponent } from './append-html.component';

describe('AppendHtmlComponent', () => {
  let component: AppendHtmlComponent;
  let fixture: ComponentFixture<AppendHtmlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppendHtmlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppendHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
