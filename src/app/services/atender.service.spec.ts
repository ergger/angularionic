import { TestBed } from '@angular/core/testing';

import { AtenderService } from './atender.service';

describe('AtenderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AtenderService = TestBed.get(AtenderService);
    expect(service).toBeTruthy();
  });
});
