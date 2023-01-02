import { TestBed } from '@angular/core/testing';

import { PerdidosService } from './perdidos.service';

describe('PerdidosService', () => {
  let service: PerdidosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerdidosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
