import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Aluno } from "src/models/aluno";

@Injectable({
  providedIn: 'root'
})

export class AlunoService {
  private url = "aluno";

  constructor(private http: HttpClient) {

  }

  public getAlunos(): Promise<Array<Aluno>> {
    return new Promise((resolve, err) => {
      this.http.get(`${environment.apiUrl}/${this.url}`).subscribe({
        next: (alunos) => {
          resolve(alunos as Array<Aluno>);
        },
        error: (error) => {
          return error;
        }
      })
    })
  }

  public deleteObject(object: Aluno): Promise<Aluno> {
    return new Promise((resolve, err) => {
      this.http.delete(`${environment.apiUrl}/${this.url}/${object.id}`).subscribe({
        next: (response) => {
          resolve(response as Aluno);
        },
        error: (error) => {
          return error;
        }
      })
    })
  }
}
