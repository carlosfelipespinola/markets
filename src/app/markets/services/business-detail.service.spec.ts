import { TestBed } from '@angular/core/testing';

import { BusinessDetailService } from './business-detail.service';

describe('BusinessDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BusinessDetailService = TestBed.get(BusinessDetailService);
    expect(service).toBeTruthy();
  });
});
