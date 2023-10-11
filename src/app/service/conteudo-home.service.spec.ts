import { TestBed } from '@angular/core/testing';

import { ConteudoHomeService } from './conteudo-home.service';

describe('ConteudoHomeService', () => {
  let service: ConteudoHomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConteudoHomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
