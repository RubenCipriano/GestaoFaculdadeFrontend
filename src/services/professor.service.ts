import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Professor } from "src/models/professor";

@Injectable({
  providedIn: 'root'
})

export class ProfessorService {
  private url = "professor";

  constructor(private http: HttpClient) {

  }

  public getProfessores(): Promise<Array<Professor>> {
    return new Promise((resolve, err) => {
      this.http.get(`${environment.apiUrl}/${this.url}`).subscribe({
        next: (professor) => {
          resolve(professor as Array<Professor>);
        },
        error: (error) => {
          return error;
        }
      })
    })
  }

  public deleteObject(object: Professor): Promise<Professor> {
    return new Promise((resolve, err) => {
      this.http.delete(`${environment.apiUrl}/${this.url}/${object.id}`).subscribe({
        next: (response) => {
          resolve(response as Professor);
        },
        error: (error) => {
          return error;
        }
      })
    })
  }
}
