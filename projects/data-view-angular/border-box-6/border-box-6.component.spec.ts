import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorderBox6Component } from './border-box-6.component';

describe('BorderBox6Component', () => {
  let component: BorderBox6Component;
  let fixture: ComponentFixture<BorderBox6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorderBox6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorderBox6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
