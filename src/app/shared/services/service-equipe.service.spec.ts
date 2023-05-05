import { TestBed } from '@angular/core/testing';

import { ServiceEquipeService } from './service-equipe.service';

describe('ServiceEquipeService', () => {
  let service: ServiceEquipeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceEquipeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
