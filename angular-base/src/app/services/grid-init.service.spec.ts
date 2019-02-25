import { TestBed } from '@angular/core/testing';

import { GridInitService } from './grid-init.service';

describe('GridInitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GridInitService = TestBed.get(GridInitService);
    expect(service).toBeTruthy();
  });
});
