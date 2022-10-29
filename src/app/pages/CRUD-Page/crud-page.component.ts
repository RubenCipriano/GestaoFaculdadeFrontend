import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { InputForm, InputType } from 'src/app/components/dialog/input-form';
import { Aluno } from 'src/models/aluno';
import { AlunoService } from 'src/services/aluno.service';
import { CursoService } from 'src/services/curso.service';
import { DisciplinaService } from 'src/services/disciplinas.service';
import { DialogService } from 'src/services/modal.service';
import { NotasService } from 'src/services/notas.service';
import { ProfessorService } from 'src/services/professor.service';

@Component({
  selector: 'crud-page',
  templateUrl: './crud-page.component.html',
  styleUrls: ['./crud-page.component.scss']
})

export class CrudPageComponent implements OnInit {
  crudChoises = [
    { path: 'curso', name: 'Curso', background: '#F25022', image: 'https://cdn-icons-png.flaticon.com/512/2436/2436805.png', activated: false },
    { path: 'disciplinas', name: 'Disciplinas', background: '#7FBA00', image: 'https://cdn-icons-png.flaticon.com/512/4729/4729360.png', activated: false },
    { path: 'professor', name: 'Professor', background: '#00A4EF', image: 'https://cdn-icons-png.flaticon.com/512/3307/3307318.png', activated: false },
    { path: 'aluno', name: 'Aluno', background: '#FFB900', image: 'https://cdn-icons-png.flaticon.com/512/3135/3135773.png', activated: false },
    { path: 'notas', name: 'Notas', background: '#737373', image: 'https://cdn-icons-png.flaticon.com/512/782/782702.png', activated: false },
  ];

  headerTable: string[] = [];

  tableValues: any[] = [];

  title = '';

  formInputs: InputForm[] = [];

  edittingValue: boolean = false;

  changeBackgroundColor(color: string, event: any, activated?: boolean) {
    if(activated == false || activated == null) event.srcElement.style.backgroundColor = color;
  }

  constructor(private routerParams: Router,
    private alunoService: AlunoService,
    private notasService: NotasService,
    private disciplinaService: DisciplinaService,
    private cursoService: CursoService,
    private professorService: ProfessorService,
    public dialogService: DialogService) {}

  _service: any;

  ngOnInit() {
    let value = this.crudChoises.find(crud => crud.path == this.routerParams.url.substring(1))!;
    value.activated = true;
    this.title = value.name;

    switch(value.path) {
      case 'aluno':
        this._service = this.alunoService;
        this.alunoService.getAlunos().then((alunos) => {
          this.headerTable = Object.keys(alunos[0]).slice(1);
          alunos.forEach(aluno => {
            this.tableValues.push(aluno);
          })
        });
        break;
      case 'professor':
        this._service = this.professorService;
        this.professorService.getProfessores().then((professor) => {
          this.headerTable = Object.keys(professor[0]).slice(1);
          professor.forEach((professor) => {
            this.tableValues.push(professor);
          })
        })
        break;
      case 'notas':
        this._service = this.notasService;
        this.notasService.getNotas().then((notas) => {
          this.headerTable = Object.keys(notas[0]).slice(1);
          notas.forEach((nota) => {
            this.tableValues.push(nota);
          })
        })
        break;
      case 'disciplinas':
        this._service = this.disciplinaService;
        this.disciplinaService.getDisciplinas().then((disciplinas) => {
          this.headerTable = Object.keys(disciplinas[0]).slice(1);
          disciplinas.forEach((disciplina) => {
            this.tableValues.push(disciplina);
          })
        })
        break;
      case 'curso':
        this._service = this.cursoService;
        this.cursoService.getCursos().then((cursos) => {
          this.headerTable = Object.keys(cursos[0]).slice(1);
          cursos.forEach((curso) => {
            this.tableValues.push(curso);
          })
        })
        break;
    }
  }

  edit(value: any) {
    this.edittingValue = true;
    this.getFormInputs().then(() => {
    }).finally(() => this.dialogService.openDialog())
  }

  create() {
    this.edittingValue = false;
    this.getFormInputs().then(() => this.dialogService.openDialog())
  }

  async getFormInputs() {
    let currentUrl = this.crudChoises.find(crud => crud.path == this.routerParams.url.substring(1))!;

    switch(currentUrl.path) {
      case 'aluno':
        this.formInputs = [
          {name: 'nome', type: InputType.string},
          {name: 'data_Nascimento', type: InputType.date},
          {name: 'matricula', type: InputType.number}
        ]
        break;
      case 'professor':
        this.formInputs = [
          {name: 'nome', type: InputType.string},
          {name: 'data_nascimento', type: InputType.date},
          {name: 'salario', type: InputType.number}
        ]
        break;
      case 'notas':
        this.formInputs = [
          {name: 'aluno', type: InputType.dropdown},
          {name: 'disciplina', type: InputType.dropdown},
          {name: 'nota', type: InputType.number}
        ]
        break;
      case 'disciplinas':
        this.formInputs = [
          {name: 'nome', type: InputType.string},
          {name: 'professor', type: InputType.dropdown},
          {name: 'curso', type: InputType.dropdown},
        ]
        break;
      case 'curso':
        this.formInputs = [
          {name: 'nome', type: InputType.string},
        ]
        break;
    }


    this.formInputs.forEach(async (inputForm) => {
        if(inputForm.type == InputType.dropdown) {
          if(inputForm.name == 'professor')
            inputForm.value = await this.professorService.getProfessores();
          if(inputForm.name == 'curso')
            inputForm.value = await this.cursoService.getCursos();
        }
    })
  }

  addTable(value: any) {
    this.tableValues.push(value);
  }

  remove(value: any) {
    this._service.deleteObject(value);
    this.tableValues = this.tableValues.filter(originalValue => originalValue != value);
  }

  isDate(_date: string){
    const _regExp  = new RegExp('^(-?(?:[1-9][0-9]*)?[0-9]{4})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9])T(2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9])(.[0-9]+)?(Z)?$');
    return _regExp.test(_date);
  }

  isObject(val: any): boolean {
      return typeof val === 'object';
  }
}
