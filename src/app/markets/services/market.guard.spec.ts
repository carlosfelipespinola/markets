import { TestBed, async, inject } from '@angular/core/testing';

import { MarketGuard } from './market.guard';

describe('MarketGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MarketGuard]
    });
  });

  it('should ...', inject([MarketGuard], (guard: MarketGuard) => {
    expect(guard).toBeTruthy();
  }));
});
