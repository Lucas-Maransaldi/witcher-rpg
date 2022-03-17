import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { distinctUntilChanged, mapTo, Subscription, tap } from 'rxjs';
import { Atributos } from '../../type/personagem';

import { PersonagemService } from './../../services/personagem.service';

@Component({
  selector: 'app-atributos',
  templateUrl: './atributos.component.html',
  styleUrls: ['./atributos.component.scss']
})
export class AtributosComponent implements OnInit, OnDestroy {

  _formGroup!: FormGroup;
  _secundaryFormGroup!: FormGroup;
  private _attrChangeSubscription!: Subscription;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _primaryAttrEnt!: [string, any][];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _secundaryAttrEnt!: [string, any][];

  // private _primaryAttr: Atributos;

  constructor(private personagemService: PersonagemService) {
    this._generatePrimaryAttrFormGroup();
    this._generateSecundaryAttrFormGroup();
  }
  private _generateSecundaryAttrFormGroup(): void {
    this._secundaryAttrEnt = Object.entries(this.personagemService.selectedCharacter.secondaryAtributos || {})
    const secundaryAttr = Object.fromEntries(
      this._secundaryAttrEnt.map(keyValue => {
        keyValue[1] = new FormControl(keyValue[1]);
        return keyValue;
      })
    );
    this._secundaryFormGroup = new FormGroup(secundaryAttr);
  }

  private _generatePrimaryAttrFormGroup(): void {
    this._primaryAttrEnt = Object.entries(this.personagemService.selectedCharacter.atributos || {});
    const selectedCharacter = Object.fromEntries(
      this._primaryAttrEnt.map(keyValue => {
        keyValue[1] = new FormControl(keyValue[1]);
        return keyValue;
      })
    );
    this._formGroup = new FormGroup(selectedCharacter);
    this._attrChangeSubscription = this._formGroup.valueChanges
      .pipe(
        distinctUntilChanged(),
        tap((atributos: Atributos) => {
          this.personagemService.atributos = atributos;
          const secundary = this.personagemService.secundaryGenerate().secondaryAtributos || {}
          this._secundaryFormGroup.setValue(secundary);
        })
      ).subscribe()
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this._attrChangeSubscription.unsubscribe();
  }

}
