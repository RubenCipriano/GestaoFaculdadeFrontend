import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Notas } from "src/models/notas";

@Injectable({
  providedIn: 'root'
})

export class NotasService {
  private url = "notas";

  constructor(private http: HttpClient) {

  }

  public getNotas(): Promise<Array<Notas>> {
    return new Promise((resolve, err) => {
      this.http.get(`${environment.apiUrl}/${this.url}`).subscribe({
        next: (notas) => {
          resolve(notas as Array<Notas>);
        },
        error: (error) => {
          return error;
        }
      })
    })
  }

  public deleteObject(object: Notas): Promise<Notas> {
    return new Promise((resolve, err) => {
      this.http.delete(`${environment.apiUrl}/${this.url}/${object.id}`).subscribe({
        next: (response) => {
          resolve(response as Notas);
        },
        error: (error) => {
          return error;
        }
      })
    })
  }
}
