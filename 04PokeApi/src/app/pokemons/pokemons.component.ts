import {Component, OnInit} from '@angular/core';
import {PokeApiService} from "../services/poke-api.service";
import {Result} from "../interfaces/pokemon-response.interface";


@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {
  listadoPokemon: Result[] = [];
  selectedPokemon!: Result;

  constructor(private pokemonService: PokeApiService) {
  }

  ngOnInit(): void {
    this.pokemonService.pokemonList().subscribe(response => {
      this.listadoPokemon = response.results;
      this.listadoPokemon.forEach(result => this.pokemonService.getPokemonURL(result.url).subscribe(response => {
        result.pokemon = response;
      }))
    })
  }

  selectPokemon(pokemon: Result) {
    this.selectedPokemon = pokemon;
  }
}
