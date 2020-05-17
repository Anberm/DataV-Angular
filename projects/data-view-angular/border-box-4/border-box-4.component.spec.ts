import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorderBox4Component } from './border-box-4.component';

describe('BorderBox4Component', () => {
  let component: BorderBox4Component;
  let fixture: ComponentFixture<BorderBox4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorderBox4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorderBox4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
