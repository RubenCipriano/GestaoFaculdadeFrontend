import { Disciplina } from "./disciplina";

export interface Curso {
  id: Number;

  nome: String,

  disciplinas: Array<Disciplina>
}
