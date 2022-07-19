import { TestBed } from '@angular/core/testing';

import { ReactServiceService } from './react-service.service';

describe('ReactServiceService', () => {
  let service: ReactServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReactServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
