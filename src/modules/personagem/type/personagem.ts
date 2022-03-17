export interface Personagem {
  name?: string;
  race?: string;
  genero?: string;
  age?: number;
  job?: Job;
  atributos?: Atributos;
  secondaryAtributos?: SecondaryAtributos;
  pericias?: Pericia[];
}

export interface Job {
  name?: string;
  pericias?: Pericia[]
}

export interface Pericia {
  name?: string;
  value?: number;
}

export interface Atributos {
  int: number;
  ref: number;
  des: number;
  corpo: number;
  vel: number;
  emp: number;
  cri: number;
  von: number;
  sorte: number;
}

export interface SecondaryAtributos {
  atord: number;
  correr: number;
  salto: number;
  pv: number;
  est: number;
  far: number;
  rec: number;
  soco: string;
  chute: string;
}
