import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorderBox5Component } from './border-box-5.component';

describe('BorderBox5Component', () => {
  let component: BorderBox5Component;
  let fixture: ComponentFixture<BorderBox5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorderBox5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorderBox5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
