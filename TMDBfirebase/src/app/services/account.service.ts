import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {AccountResponse} from "../interfaces/account.interface";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) {
  }

  public getDetails(): Observable<AccountResponse> {
    return this.http.get<AccountResponse>(`${(environment.urlBase)}/account?api_key=${environment.apiKey}&session_id=${localStorage.getItem('session_id')}`)
  }
}
