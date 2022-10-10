import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Collection} from "../interfaces/collection.interface";

const API_BASE = 'https://api.themoviedb.org/3'
const END_OF_REQUEST = '?api_key=b84f85b99bb0edf66221ac67fa69734b&language=en-US'

@Injectable({
  providedIn: 'root'
})
export class CollectionsService {

  constructor(private http: HttpClient) {
  }

  public getCollectionById(id: number): Observable<Collection>{
    return this.http.get<Collection>(`${API_BASE}/collection/${id}${END_OF_REQUEST}`);
  }
}
