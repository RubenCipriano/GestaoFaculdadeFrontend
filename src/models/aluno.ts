import { Notas } from "./notas";

export interface Aluno {

  id: number;

  nome: String;

  matricula: Number;

  data_Nascimento: Date;

  notas: Array<Notas>;

  notaFinal: Number;

  disciplinas: Array<string>;
}
