import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PeopleResponse, Person} from "../interfaces/people-response.interface";
import {Film, FilmsResponse} from "../interfaces/films-response.interface";
import {World} from "../interfaces/worlds-response.interface";
import {SpeciesResponse} from "../interfaces/species-response.interface";

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

  public getPerson(id: string): Observable<Person>{
    return this.http.get<Person>(`${API_BASE_URL}/people/${id}`);
  }

  public filmList(): Observable<FilmsResponse>{
    return this.http.get<FilmsResponse>(`${API_BASE_URL}/films`);
  }

  public getFilmByUrl(url: string): Observable<Film>{
    return this.http.get<Film>(url);
  }

  public getWorldByURL(url: string): Observable<World>{
    return this.http.get<World>(url);
  }

  public speciesList(page: number): Observable<SpeciesResponse>{
    return this.http.get<SpeciesResponse>(`${API_BASE_URL}/species?page${page}`)
  }
}
