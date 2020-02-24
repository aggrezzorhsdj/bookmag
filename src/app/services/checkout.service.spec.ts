import { TestBed } from '@angular/core/testing';

import { CheckoutService } from './email.service';

describe('EmailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CheckoutService = TestBed.get(CheckoutService);
    expect(service).toBeTruthy();
  });
});
