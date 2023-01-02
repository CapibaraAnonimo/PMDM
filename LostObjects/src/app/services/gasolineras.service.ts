import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {GasolinerasResponse} from "../interfaces/gasolineras.interface";

@Injectable({
  providedIn: 'root'
})
export class GasolinerasService {

  constructor(private http: HttpClient) {
  }

  getGasolineras(): Observable<GasolinerasResponse>{
    return this.http.get<GasolinerasResponse>(`https://raw.githubusercontent.com/CapibaraAnonimo/PMDM/master/gasApp.json`);
  }

  getGasolinerasByMunicipio(id: string): Observable<GasolinerasResponse>{
    return this.http.get<GasolinerasResponse>(`https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/EstacionesTerrestres/FiltroMunicipio/${id}`);
  }
}
