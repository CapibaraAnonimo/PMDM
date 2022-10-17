import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Planet, PlanetsResponse } from '../interfaces/planets.interface';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  constructor(private http: HttpClient) { }
  
  getPlanets(page: number): Observable<PlanetsResponse> {
    return this.http.get<PlanetsResponse>(`${environment.apiBaseUrl}/planets?page=${page}`);
  }

  getPlanetById(id: number): Observable<Planet> {
    return this.http.get<Planet>(`${environment.apiBaseUrl}/planets/${id}`);
  }
}
