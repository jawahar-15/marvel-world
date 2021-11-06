import { TestBed } from '@angular/core/testing';

import { StockapiService } from './stockapi.service';

describe('StockapiService', () => {
  let service: StockapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
