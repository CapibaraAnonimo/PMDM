import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Film} from "../interfaces/movie.interface";

const API_BASE = 'https://api.themoviedb.org/3'
const END_OF_REQUEST = '?api_key=b84f85b99bb0edf66221ac67fa69734b&language=en-US'

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) {
  }

  public getMovieById(id: number): Observable<Film> {
    return this.http.get<Film>(`${API_BASE}/movie/${id}${END_OF_REQUEST}`);
  }
}
