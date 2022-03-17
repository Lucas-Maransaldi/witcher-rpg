/* tslint:disable:no-unused-variable */
import { inject, TestBed } from '@angular/core/testing';

import { PericiasService } from './pericias.service';


describe('Service: Pericias', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PericiasService]
    });
  });

  it('should ...', inject([PericiasService], (service: PericiasService) => {
    expect(service).toBeTruthy();
  }));
});
