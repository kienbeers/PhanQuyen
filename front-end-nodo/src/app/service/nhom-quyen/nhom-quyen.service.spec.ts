import { TestBed } from '@angular/core/testing';

import { NhomQuyenService } from './nhom-quyen.service';

describe('NhomQuyenService', () => {
  let service: NhomQuyenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NhomQuyenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
