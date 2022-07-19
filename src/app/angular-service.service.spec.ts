import { TestBed } from '@angular/core/testing';

import { AngularServiceService } from './angular-service.service';

describe('AngularServiceService', () => {
  let service: AngularServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
