import {Component, OnInit} from '@angular/core';
import {PokeApiService} from "../services/poke-api.service";

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {
  listadoPokemon: Pokemon[] = [];

  constructor(private pokemonService: PokeApiService) {
  }

  ngOnInit(): void {
    this.pokemonService.pokemonList().subscribe(response => {
      this.listadoPokemon = response.results;
    })
  }

}
