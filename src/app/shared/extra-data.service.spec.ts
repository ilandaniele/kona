import { TestBed, inject } from '@angular/core/testing';

import { ExtraDataService } from './extra-data.service';

describe('ExtraDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExtraDataService]
    });
  });

  it('should be created', inject([ExtraDataService], (service: ExtraDataService) => {
    expect(service).toBeTruthy();
  }));
});
