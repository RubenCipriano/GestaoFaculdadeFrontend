import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Curso } from "src/models/curso";

@Injectable({
  providedIn: 'root'
})

export class CursoService {
  private url = "curso";

  constructor(private http: HttpClient) {

  }

  public getCursos(): Promise<Array<Curso>> {
    return new Promise((resolve, err) => {
      this.http.get(`${environment.apiUrl}/${this.url}`).subscribe({
        next: (curso) => {
          resolve(curso as Array<Curso>);
        },
        error: (error) => {
          return error;
        }
      })
    })
  }

  public deleteObject(object: Curso): Promise<Curso> {
    return new Promise((resolve, err) => {
      this.http.delete(`${environment.apiUrl}/${this.url}/${object.id}`).subscribe({
        next: (response) => {
          resolve(response as Curso);
        },
        error: (error) => {
          return error;
        }
      })
    })
  }
}
