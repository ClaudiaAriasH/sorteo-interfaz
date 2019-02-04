import { TestBed } from '@angular/core/testing';

import { SorteoService } from './sorteo.service';

describe('SorteoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SorteoService = TestBed.get(SorteoService);
    expect(service).toBeTruthy();
  });
});
