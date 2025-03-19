import { TestBed } from '@angular/core/testing';

import { StaticVarsService } from './static-vars.service';

describe('StaticVarsService', () => {
  let service: StaticVarsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StaticVarsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
