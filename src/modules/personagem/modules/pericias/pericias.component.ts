import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { PericiasService } from './../../services/pericias.service';
import { PersonagemService } from './../../services/personagem.service';
import { Personagem } from './../../type/personagem';

@Component({
  selector: 'app-pericias',
  templateUrl: './pericias.component.html',
  styleUrls: ['./pericias.component.scss']
})
export class PericiasComponent implements OnInit, OnDestroy {

  _personagem!: Personagem;
  private _personagemSubscription!: Subscription;

  constructor(
    private periciasService: PericiasService,
    private personagemService: PersonagemService) { }

  ngOnInit() {
    this._personagemSubscription = this.personagemService.selectedCharacter$
      .subscribe(
        character => {
          this._personagem = character;
        }
      );
  }

  ngOnDestroy(): void {
    this._personagemSubscription.unsubscribe();
  }

}
