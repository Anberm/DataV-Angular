import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorderBox2Component } from './border-box-2.component';

describe('BorderBox2Component', () => {
  let component: BorderBox2Component;
  let fixture: ComponentFixture<BorderBox2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorderBox2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorderBox2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
