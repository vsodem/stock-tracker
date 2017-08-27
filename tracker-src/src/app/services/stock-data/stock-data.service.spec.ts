import { TestBed, inject } from '@angular/core/testing';

import { StockDataService } from './stock-data.service';

describe('StockDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StockDataService]
    });
  });

  it('should be created', inject([StockDataService], (service: StockDataService) => {
    expect(service).toBeTruthy();
  }));
});
