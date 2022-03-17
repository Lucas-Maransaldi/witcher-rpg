import { Atributos, Personagem, SecondaryAtributos } from './../type/personagem';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonagemService {

  private _selectedCharacter: Personagem = {
    atributos: {
      int: 0,
      ref: 0,
      des: 0,
      corpo: 0,
      vel: 0,
      emp: 0,
      cri: 0,
      von:0,
      sorte: 0
    },
    secondaryAtributos: {
      atord: 0,
      correr: 0,
      salto: 0,
      pv: 0,
      est: 0,
      far: 0,
      rec: 0,
      soco: 'xd6',
      chute: 'xd6'
    }
  };

  constructor() { }

  get selectedCharacter(): Personagem {
    return this._selectedCharacter;
  }

  set selectedCharacter(character: Personagem) {
    this._selectedCharacter = character;
  }

  set atributos(atributos: Atributos) {
    this._selectedCharacter.atributos = atributos;
  }

  public secundaryGenerate(personagem: Personagem = this._selectedCharacter): Personagem {
    personagem.secondaryAtributos = {} as SecondaryAtributos;
    const fisico = ((personagem.atributos?.corpo || 0) + (personagem.atributos?.von || 0)) / 2;
    personagem.secondaryAtributos.atord = fisico;
    personagem.secondaryAtributos.correr = (personagem.atributos?.vel || 0) * 3;
    personagem.secondaryAtributos.est = fisico * 5
    personagem.secondaryAtributos.far = (personagem.atributos?.corpo || 0) * 10;
    personagem.secondaryAtributos.pv = fisico * 5
    personagem.secondaryAtributos.rec = fisico
    personagem.secondaryAtributos.salto = (personagem.atributos?.vel || 0) * 3 / 5;
    personagem.secondaryAtributos.soco = '' // TODO:: switch
    personagem.secondaryAtributos.chute = ''
    return personagem;
  }
}
