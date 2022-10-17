import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Vehicle, VehiclesResponse } from '../interfaces/vehicles.interface';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  constructor(private http: HttpClient) { }

  getVehicles(page: number): Observable<VehiclesResponse> {
    return this.http.get<VehiclesResponse>(`${environment.apiBaseUrl}/vehicles?page=${page}`);
  }

  getVehicleById(id: number): Observable<Vehicle> {
    return this.http.get<Vehicle>(`${environment.apiBaseUrl}/vehicles/${id}`);
  }
}
