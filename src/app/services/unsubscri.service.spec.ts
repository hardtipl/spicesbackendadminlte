import { TestBed } from '@angular/core/testing';

import { UnsubscriService } from './unsubscri.service';

describe('UnsubscriService', () => {
  let service: UnsubscriService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnsubscriService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
