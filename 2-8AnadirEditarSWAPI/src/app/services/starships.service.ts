import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StarshipsResponse } from '../interfaces/starships.inteface';

@Injectable({
  providedIn: 'root'
})
export class StarshipsService {

  constructor(private http: HttpClient) { }

  getStarships(page: number): Observable<StarshipsResponse> {
    return this.http.get<StarshipsResponse>(`${environment.apiBaseUrl}/starships?page=${page}`);
  }

  getStarshipById(id: number): Observable<StarshipsResponse> {
    return this.http.get<StarshipsResponse>(`${environment.apiBaseUrl}/starships/${id}`);
  }
}
