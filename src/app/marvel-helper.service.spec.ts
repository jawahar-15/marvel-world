import { TestBed } from '@angular/core/testing';

import { MarvelHelperService } from './marvel-helper.service';

describe('MarvelHelperService', () => {
  let service: MarvelHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarvelHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
