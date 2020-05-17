import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorderBox7Component } from './border-box-7.component';

describe('BorderBox7Component', () => {
  let component: BorderBox7Component;
  let fixture: ComponentFixture<BorderBox7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorderBox7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorderBox7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
