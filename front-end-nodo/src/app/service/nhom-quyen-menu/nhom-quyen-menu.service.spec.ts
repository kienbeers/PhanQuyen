import { TestBed } from '@angular/core/testing';

import { NhomQuyenMenuService } from './nhom-quyen-menu.service';

describe('NhomQuyenMenuService', () => {
  let service: NhomQuyenMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NhomQuyenMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
