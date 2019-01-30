import { TestBed } from '@angular/core/testing';

import { SPServiceService } from './spservice.service';

describe('SPServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SPServiceService = TestBed.get(SPServiceService);
    expect(service).toBeTruthy();
  });
});
