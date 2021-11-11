import { TestBed } from '@angular/core/testing';

import { PremiseServiceService } from './premise-service.service';

describe('PremiseServiceService', () => {
  let service: PremiseServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PremiseServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
