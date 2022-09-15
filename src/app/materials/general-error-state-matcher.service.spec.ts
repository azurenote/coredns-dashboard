import { TestBed } from '@angular/core/testing';

import { GeneralErrorStateMatcherService } from './general-error-state-matcher.service';

describe('GeneralErrorStateMatcherService', () => {
  let service: GeneralErrorStateMatcherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneralErrorStateMatcherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
