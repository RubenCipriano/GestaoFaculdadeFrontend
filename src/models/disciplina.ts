import { Aluno } from "./aluno";
import { Curso } from "./curso";
import { Notas } from "./notas";
import { Professor } from "./professor";

export interface Disciplina {
  id: number,

  nome: String,

  alunos: Array<Aluno>,

  notas: Array<Notas>,

  cursos: Array<Curso>,

  professor: Professor,
}
