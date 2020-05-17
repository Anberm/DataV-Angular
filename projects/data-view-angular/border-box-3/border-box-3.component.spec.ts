import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorderBox3Component } from './border-box-3.component';

describe('BorderBox3Component', () => {
  let component: BorderBox3Component;
  let fixture: ComponentFixture<BorderBox3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorderBox3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorderBox3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
