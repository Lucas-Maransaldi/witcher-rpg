import { Pericia } from './../type/personagem';
import { PersonagemService } from './personagem.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PericiasService {

  constructor(private personagemService: PersonagemService) {
    this._setUpPericias();
  }

  private _setUpPericias(): void {
    const pericias: Pericia[] = [
      {attrRelation: 'int', values: int},
      {attrRelation: 'ref', values: ref},
      {attrRelation: 'des', values: des},
      {attrRelation: 'corpo', values: corpo},
      {attrRelation: 'emp', values: emp},
      {attrRelation: 'cri', values: cri},
      {attrRelation: 'von', values: von},
    ];
    this.personagemService.pericias = pericias;
  }

}

const int = [
  {name: 'consciência', value: 0},
  {name: 'negócios', value: 0},
  {name: 'dedução', value: 0},
  {name: 'nordíco', value: 0},
  {name: 'fala ancestal', value: 0},
  {name: 'anão', value: 0},
  {name: 'sabedoria sobre monstros', value: 0},
  {name: 'etiqueta social', value: 0},
  {name: 'sabedoria das ruas', value: 0},
  {name: 'táticas', value: 0},
  {name: 'ensinar', value: 0},
  {name: 'sobrevicência do ermo', value: 0}
];
const ref = [
  {name: 'brigar', value: 0},
  {name: 'esquivar/Escapar', value: 0},
  {name: 'curta distância', value: 0},
  {name: 'cavalgar', value: 0},
  {name: 'velejar', value: 0},
  {name: 'laminas pequenas', value: 0},
  {name: 'cajado/Lança', value: 0},
  {name: 'esgrima', value: 0}
];
const des = [
  {name: 'arco e flexa', value: 0},
  {name: 'atletismo', value: 0},
  {name: 'besta', value: 0},
  {name: 'prestigitação', value: 0},
  {name: 'furtividade', value: 0}
];
const corpo = [
  {name: 'físico', value: 0},
  {name: 'tolerancia', value: 0}
];
const emp = [
  {name: 'carisma', value: 0},
  {name: 'ludibriar', value: 0},
  {name: 'belas artes', value: 0},
  {name: 'apostar', value: 0},
  {name: 'aparencia e estilo', value: 0},
  {name: 'percepção humana', value: 0},
  {name: 'liderança', value: 0},
  {name: 'persuasão', value: 0},
  {name: 'apresentação', value: 0},
  {name: 'sedução', value: 0}
];
const cri = [
  {name: 'alquimia', value: 0},
  {name: 'criar', value: 0},
  {name: 'disfarce', value: 0},
  {name: 'primeiros soccorros', value: 0},
  {name: 'falsificação', value: 0},
  {name: 'arrombar fechaduras', value: 0},
  {name: 'criar armadilhas', value: 0}
];
const von = [
  {name: 'coragem', value: 0},
  {name: 'criar hex', value: 0},
  {name: 'intimidação', value: 0},
  {name: 'lançar feitiço', value: 0},
  {name: 'resistir a magia', value: 0},
  {name: 'resistir a coerção', value: 0},
  {name: 'criar ritual', value: 0}
];
