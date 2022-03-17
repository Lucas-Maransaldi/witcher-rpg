/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PersonagemService } from './personagem.service';

describe('Service: Personagem', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersonagemService]
    });
  });

  it('should ...', inject([PersonagemService], (service: PersonagemService) => {
    expect(service).toBeTruthy();
  }));
});
