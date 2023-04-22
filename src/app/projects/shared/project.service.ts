import { Injectable } from '@angular/core';
import { Observable, catchError, delay, throwError } from 'rxjs';
import { Project } from './project.model';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projectsUrl = environment.backendUrl + '/projects/'

  constructor(private http: HttpClient) { }

  list(): Observable<Project[]> {
    // return of(MOCK_PROJECTS)
    return this.http.get<Project[]>(this.projectsUrl).pipe(
      delay(500),
      catchError((error: HttpErrorResponse) => {
        console.error(error)
        return throwError('An error occurred loading the projects.')
      })
    )
  }

  put(project: Project): Observable<Project> {
    const url = this.projectsUrl + project.id
    return this.http.put<Project>(url, project, httpOptions).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error)
        return throwError('An error occured updating the projects.')
      })
    )
  }

  find(id: number): Observable<Project> {
    const url = this.projectsUrl + id
    return this.http.get<Project>(url).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error)
        return throwError('An error occurred loading the project.')
      })
    )
  }

  create(project: Project): Observable<Project> {
    return this.http.post<Project>(this.projectsUrl, project, httpOptions).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error)
        return throwError('An error occured creating the project.')
      })
    )
  }

  delete(id: number): Observable<Project> {
    const url = this.projectsUrl + id
    return this.http.delete<Project>(url).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error)
        return throwError('An error occurred loading the project.')
      })
    )
  }
}
