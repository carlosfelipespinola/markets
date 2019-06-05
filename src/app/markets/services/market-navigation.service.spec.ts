import { TestBed } from '@angular/core/testing';

import { MarketNavigationService } from './market-navigation.service';

describe('MarketNavigationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MarketNavigationService = TestBed.get(MarketNavigationService);
    expect(service).toBeTruthy();
  });
});
