import { TestBed } from '@angular/core/testing';

import { CommonUserService } from './common-user.service';

describe('CommonUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommonUserService = TestBed.get(CommonUserService);
    expect(service).toBeTruthy();
  });
});
