import { TestBed } from '@angular/core/testing';

import { AlterRoleService } from './alter-role.service';

describe('AlterRoleService', () => {
  let service: AlterRoleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlterRoleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
