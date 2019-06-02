import { TestBed } from '@angular/core/testing';

import { HomeNavigationService } from './home-navigation.service';

describe('HomeNavigationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HomeNavigationService = TestBed.get(HomeNavigationService);
    expect(service).toBeTruthy();
  });
});
