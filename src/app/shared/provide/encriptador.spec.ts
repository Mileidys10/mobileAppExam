import { TestBed } from '@angular/core/testing';

import { Encriptador } from './encriptador';

describe('Encriptador', () => {
  let service: Encriptador;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Encriptador);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
