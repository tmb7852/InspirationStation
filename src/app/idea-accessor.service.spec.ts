import { TestBed } from '@angular/core/testing';

import { IdeaAccessorService } from './idea-accessor.service';

describe('IdeaAccessorService', () => {
  let service: IdeaAccessorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IdeaAccessorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
