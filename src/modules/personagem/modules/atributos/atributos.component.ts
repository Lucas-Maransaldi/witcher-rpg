import { Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged, takeUntil, tap } from 'rxjs';

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
  private _endSubscriptions: EventEmitter<boolean> = new EventEmitter(true);

  _primaryAttrEnt!: string[];
  _secundaryAttrEnt!: string[];

  constructor(private personagemService: PersonagemService) {
    this._formGroup = this.personagemService.generateAttrFormGroup('primary');
    this._secundaryFormGroup = this.personagemService.generateAttrFormGroup('secundary');
    this.personagemService.selectedCharacter$
      .pipe(takeUntil(this._endSubscriptions))
      .subscribe(character => {
        this._formGroup.setValue(character.atributos || {}, {emitEvent: false});
        this._secundaryFormGroup.setValue(character.secondaryAtributos || {}, {emitEvent: false});
      });
    this._setUpAuxInterators()
  }

  private _setUpAuxInterators(): void {
    this._primaryAttrEnt = Object.keys(this._formGroup.controls);
    this._secundaryAttrEnt = Object.keys(this._secundaryFormGroup.controls);
  }

  private _setUpSubscriptions(): void {
    this._formGroup.valueChanges
      .pipe(
        takeUntil(this._endSubscriptions),
        distinctUntilChanged(),
        debounceTime(500),
        tap((atributos: Atributos) => {
          this.personagemService.atributos = atributos;
        })
      ).subscribe()
  }

  ngOnInit() {
    this._setUpSubscriptions();
  }

  ngOnDestroy(): void {
    this._endSubscriptions.next(true);
  }

}
