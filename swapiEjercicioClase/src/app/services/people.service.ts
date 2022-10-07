import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PeopleResponse} from "../interfaces/people-response.interface";
import {PersonResponse} from "../interfaces/person-response.interface";
import {FilmsResponse} from "../interfaces/films-response.interface";

const API_BASE_URL = 'https://swapi.dev/api'

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) {
  }

  public peopleList(): Observable<PeopleResponse>{
    return this.http.get<PeopleResponse>(`${API_BASE_URL}/people`);
  }

  public getPerson(id: string): Observable<PersonResponse>{
    return this.http.get<PersonResponse>(`${API_BASE_URL}/people/${id}`);
  }

  public filmList(): Observable<FilmsResponse>{
    return this.http.get<FilmsResponse>(`${API_BASE_URL}/films`);
  }

  public getFilmByUrl(url: string): Observable<FilmsResponse>{
    return this.http.get<FilmsResponse>(`${url}`);
  }
}
