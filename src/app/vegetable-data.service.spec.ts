import { TestBed } from '@angular/core/testing';

import { VegetableDataService } from './vegetable-data.service';

describe('VegetableDataService', () => {
  let service: VegetableDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VegetableDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
