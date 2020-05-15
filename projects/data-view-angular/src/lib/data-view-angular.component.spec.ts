import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataViewAngularComponent } from './data-view-angular.component';

describe('DataViewAngularComponent', () => {
  let component: DataViewAngularComponent;
  let fixture: ComponentFixture<DataViewAngularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataViewAngularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataViewAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
