import { TestBed } from '@angular/core/testing';

import { TelaCinemaService } from './tela-cinema.service';

describe('TelaCinemaService', () => {
  let service: TelaCinemaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TelaCinemaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
