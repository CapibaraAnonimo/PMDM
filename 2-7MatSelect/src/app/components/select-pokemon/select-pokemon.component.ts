import { Component, OnInit } from '@angular/core';
import {PokemonService} from "../../services/pokemon.service";
import {PokemonURL} from "../../interfaces/pokemon.interface";

@Component({
  selector: 'app-select-pokemon',
  templateUrl: './select-pokemon.component.html',
  styleUrls: ['./select-pokemon.component.css']
})
export class SelectPokemonComponent implements OnInit {
  pokemons: PokemonURL[] = [];
  opcion: any;
  pokemon: any;

  constructor(private pokemonservice: PokemonService) { }

  ngOnInit(): void {
    this.pokemonservice.getPokemons().subscribe(response => {
      this.pokemons = response.results;
    })
  }

  getPokemon(){
    this.pokemonservice.getPokemonByURL(this.opcion.url).subscribe(response => {
      this.pokemon = response;
    })
  }

}
