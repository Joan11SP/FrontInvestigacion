import { TestBed } from '@angular/core/testing';

import { ExportUsersService } from './export-users.service';

describe('ExportUsersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExportUsersService = TestBed.get(ExportUsersService);
    expect(service).toBeTruthy();
  });
});
