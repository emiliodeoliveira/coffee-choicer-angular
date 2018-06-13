import { TestBed, inject } from '@angular/core/testing';

import { CoffeeContributionDataService } from './coffee-contribution-data.service';

describe('CoffeeContributionDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoffeeContributionDataService]
    });
  });

  it('should be created', inject([CoffeeContributionDataService], (service: CoffeeContributionDataService) => {
    expect(service).toBeTruthy();
  }));
});
