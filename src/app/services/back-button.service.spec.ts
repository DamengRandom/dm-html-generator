import { TestBed, inject } from '@angular/core/testing';

import { BackButtonService } from './back-button.service';

describe('BackButtonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BackButtonService]
    });
  });

  it('should be created', inject([BackButtonService], (service: BackButtonService) => {
    expect(service).toBeTruthy();
  }));
});
