import { TestBed } from '@angular/core/testing';

import { ServiceDetailEquipeService } from './service-detail-equipe.service';

describe('ServiceDetailEquipeService', () => {
  let service: ServiceDetailEquipeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceDetailEquipeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
