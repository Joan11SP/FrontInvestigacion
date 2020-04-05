import { TestBed } from '@angular/core/testing';

import { InvestigacionService } from './investigacion.service';

describe('InvestigacionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InvestigacionService = TestBed.get(InvestigacionService);
    expect(service).toBeTruthy();
  });
});
