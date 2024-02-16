import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { loguearseGuard } from './loguearse.guard';

describe('loguearseGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => loguearseGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
