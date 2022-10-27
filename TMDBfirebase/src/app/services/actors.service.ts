import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ActorsResponse} from "../interfaces/actors.interface";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ActorsService {

  constructor(private http: HttpClient) {
  }

  public getActorsPopular(page?: string): Observable<ActorsResponse>{
    return this.http.get<ActorsResponse>(`${(environment.urlBase)}/person/popular?api_key=b84f85b99bb0edf66221ac67fa69734b&page=${page}`)
  }
}
