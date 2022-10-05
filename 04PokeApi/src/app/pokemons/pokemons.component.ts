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
  pokemon: InfoGeneral = {} as InfoGeneral;
  pokemon2 = '';

  constructor(private pokemonService: PokeApiService) {
  }

  ngOnInit(): void {
    this.pokemonService.pokemonList().subscribe(response => {
      this.listadoPokemon = response.results;
    })
    this.pokemonService.getPokemon('4').subscribe(response => {
      this.pokemon2 = response.name;
    })
    this.getPokemon('4');
  }

  getPokemon(id: string): void {
    this.pokemonService.getPokemon(id).subscribe(response => {
      this.pokemon = response;
    })
  }

}
