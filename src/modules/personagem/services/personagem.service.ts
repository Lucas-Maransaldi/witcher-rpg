import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

import { Atributos, Personagem, SecondaryAtributos, Pericia } from './../type/personagem';

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

  private _characterSubscription: BehaviorSubject<Personagem> = new BehaviorSubject(this._selectedCharacter);

  constructor() { }

  get selectedCharacter(): Personagem {
    return this._selectedCharacter;
  }

  set selectedCharacter(character: Personagem) {
    this._selectedCharacter = character;
  }

  set atributos(atributos: Atributos) {
    this._selectedCharacter.atributos = atributos;
    this.secundaryGenerate();
  }

  set pericias(pericias: Pericia[]) {
    this._selectedCharacter.pericias = pericias;
    this._uptadeCharacter();
  }

  get selectedCharacter$(): BehaviorSubject<Personagem> {
    return this._characterSubscription;
  }

  private _uptadeCharacter(character: Personagem = this._selectedCharacter): void {
    this._selectedCharacter = character;
    this._characterSubscription.next(character);
  }

  public secundaryGenerate(personagem: Personagem = this._selectedCharacter): void {
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
    personagem.secondaryAtributos.chute = '';
    this._uptadeCharacter(personagem);
  }

  private _generateFormControlToAtributes(attributesToBeMapped: Atributos | SecondaryAtributos | undefined) {
    const attributes = Object.entries(attributesToBeMapped || {});
    return Object.fromEntries(
      attributes.map(keyValue => {
        keyValue[1] = new FormControl(keyValue[1]);
        return keyValue;
      })
    );
  }

  public generateAttrFormGroup(type: 'primary' | 'secundary'): FormGroup {
    const attributesToBeMapped = (type === 'primary') ? this._selectedCharacter.atributos : this._selectedCharacter.secondaryAtributos;
    return new FormGroup(this._generateFormControlToAtributes(attributesToBeMapped));
  }
}
