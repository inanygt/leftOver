import { TestBed } from '@angular/core/testing';

import { SpoonApiService } from './spoon-api.service';

describe('SpoonApiService', () => {
  let service: SpoonApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpoonApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
