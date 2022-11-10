import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {MunicipioResponse} from "../interfaces/municipio.interface";

@Injectable({
  providedIn: 'root'
})
export class MunicipiosService {

  constructor(private http: HttpClient) {
  }

  getMunicipios(provincia: string): Observable<MunicipioResponse[]> {
    return this.http.get<MunicipioResponse[]>(`https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/Listados/MunicipiosPorProvincia/${provincia}`);
  }
}
