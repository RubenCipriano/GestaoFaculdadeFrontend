import { Component } from '@angular/core';
import { AlunoService } from 'src/services/aluno.service';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})


export class HomePageComponent {
  crudChoise: string = "Escolha uma das opçoes abaixo";
  backgroundColor: string = "white";

  crudChoises = [
    { path: 'curso', name: 'Curso', background: '#F25022', image: 'https://cdn-icons-png.flaticon.com/512/2436/2436805.png', renderedImage: null },
    { path: 'disciplinas', name: 'Disciplinas', background: '#7FBA00', image: 'https://cdn-icons-png.flaticon.com/512/4729/4729360.png', renderedImage: null },
    { path: 'professor', name: 'Professor', background: '#00A4EF', image: 'https://cdn-icons-png.flaticon.com/512/3307/3307318.png', renderedImage: null },
    { path: 'aluno', name: 'Aluno', background: '#FFB900', image: 'https://cdn-icons-png.flaticon.com/512/3135/3135773.png', renderedImage: null },
    { path: 'notas', name: 'Notas', background: '#737373', image: 'https://cdn-icons-png.flaticon.com/512/782/782702.png', renderedImage: null },
  ]

  changeBackgroundColor(color: string, event: any, choiseOvered: any) {
    event.srcElement.style.backgroundColor = color;
    this.crudChoise = choiseOvered.name;
    choiseOvered.renderedImage = choiseOvered.image
  }

  constructor(private alunosService: AlunoService) {
    this.alunosService.getAlunos();
  }
}
