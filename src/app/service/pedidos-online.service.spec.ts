import { TestBed } from '@angular/core/testing';

import { PedidosOnlineService } from './pedidos-online.service';

describe('PedidosOnlineService', () => {
  let service: PedidosOnlineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PedidosOnlineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
