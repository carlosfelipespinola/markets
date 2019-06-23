import { TestBed } from '@angular/core/testing';

import { OrderServicesService } from './order-services.service';

describe('OrderServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrderServicesService = TestBed.get(OrderServicesService);
    expect(service).toBeTruthy();
  });
});
