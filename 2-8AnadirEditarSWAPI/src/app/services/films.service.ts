import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {Film, FilmsResponse} from '../interfaces/films.interface';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  constructor(private http: HttpClient) { }
  getFilms(): Observable<FilmsResponse> {
    return this.http.get<FilmsResponse>(`${environment.apiBaseUrl}/films/`);
  }

  getFilmById(id: number): Observable<Film> {
    return this.http.get<Film>(`${environment.apiBaseUrl}/films/${id}`);
  }
}
