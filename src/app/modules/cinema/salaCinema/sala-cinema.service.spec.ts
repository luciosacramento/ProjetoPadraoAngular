import { TestBed } from '@angular/core/testing';

import { SalaCinemaService } from './sala-cinema.service';

describe('SalaCinemaService', () => {
  let service: SalaCinemaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalaCinemaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
