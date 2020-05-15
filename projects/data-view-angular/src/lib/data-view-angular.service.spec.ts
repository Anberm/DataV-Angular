import { TestBed } from '@angular/core/testing';

import { DataViewAngularService } from './data-view-angular.service';

describe('DataViewAngularService', () => {
  let service: DataViewAngularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataViewAngularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
