import { TestBed } from '@angular/core/testing';

import { GauthguardGuard } from './gauthguard.guard';

describe('GauthguardGuard', () => {
  let guard: GauthguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GauthguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
