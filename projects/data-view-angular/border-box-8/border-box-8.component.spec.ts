import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorderBox8Component } from './border-box-8.component';

describe('BorderBox8Component', () => {
  let component: BorderBox8Component;
  let fixture: ComponentFixture<BorderBox8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BorderBox8Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorderBox8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
