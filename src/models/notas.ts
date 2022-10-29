import { Aluno } from "./aluno";
import { Disciplina } from "./disciplina";

export interface Notas {
  id: Number;

  disciplina: Disciplina;

  nota: number;

  aluno: Aluno;
}
