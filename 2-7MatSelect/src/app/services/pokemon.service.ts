import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Pokemons} from "../interfaces/pokemon.interface";

const BASEURL = 'pokeapi.co/api/v2'

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) {
  }

  getPokemons(): Observable<Pokemons>{
    return this.http.get<Pokemons>(`${BASEURL}/pokemon?limit=50`)
  }
}
