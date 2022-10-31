import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {NewSessionResponse, RequestTokenResponse} from "../interfaces/authentication.interface";
import {NewSessionDto} from "../dto/new-session.dto";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) {
  }

  public getRequestToken(): Observable<RequestTokenResponse> {
    return this.http.get<RequestTokenResponse>(`${(environment.urlBase)}/authentication/token/new?api_key=${environment.apiKey}`)
  }

  public createSession(request_token: NewSessionDto): Observable<NewSessionResponse> {
    return this.http.post<NewSessionResponse>(`${(environment.urlBase)}/authentication/session/new?api_key=${environment.apiKey}&request_token=`, request_token)
  }

  public deleteSession(session_id: string): Observable<unknown> {
    return this.http.delete(`${(environment.urlBase)}/authentication/session/new?api_key=${environment.apiKey}&session_id=${session_id}`)
  }
}
