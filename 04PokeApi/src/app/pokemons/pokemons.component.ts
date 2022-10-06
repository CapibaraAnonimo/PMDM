import {Component, OnInit} from '@angular/core';
import {PokeApiService} from "../services/poke-api.service";
import {InfoGeneral, Result} from "../interfaces/pokemon-response.interface";


@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {
  listadoPokemon: Result[] = [];
  pokemon: any;
  pokemon2 = '';

  constructor(private pokemonService: PokeApiService) {
  }

  ngOnInit(): void {
    this.pokemonService.pokemonList().subscribe(response => {
      this.listadoPokemon = response.results;
    })
    this.pokemonService.getPokemon('34').subscribe(response => {
      this.pokemon = response;
    })
  }

  getPokemon(id: string): void {
    this.pokemonService.getPokemon(id).subscribe(response => {
      this.pokemon = response;
    })
  }

}
