import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Disciplina } from "src/models/disciplina";

@Injectable({
  providedIn: 'root'
})

export class DisciplinaService {
  private url = "disciplinas";

  constructor(private http: HttpClient) {

  }

  public getDisciplinas(): Promise<Array<Disciplina>> {
    return new Promise((resolve, err) => {
      this.http.get(`${environment.apiUrl}/${this.url}`).subscribe({
        next: (disciplina) => {
          resolve(disciplina as Array<Disciplina>);
        },
        error: (error) => {
          return error;
        }
      })
    })
  }

  public deleteObject(object: Disciplina): Promise<Disciplina> {
    return new Promise((resolve, err) => {
      this.http.delete(`${environment.apiUrl}/${this.url}/${object.id}`).subscribe({
        next: (response) => {
          resolve(response as Disciplina);
        },
        error: (error) => {
          return error;
        }
      })
    })
  }
}
