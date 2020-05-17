import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorderBox1Component } from './border-box-1.component';

describe('BorderBox1Component', () => {
  let component: BorderBox1Component;
  let fixture: ComponentFixture<BorderBox1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorderBox1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorderBox1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
