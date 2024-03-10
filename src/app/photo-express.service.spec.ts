import { TestBed } from '@angular/core/testing';

import { PhotoExpressService } from './photo-express.service';

describe('PhotoExpressService', () => {
  let service: PhotoExpressService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotoExpressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
