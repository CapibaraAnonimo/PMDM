import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Result} from "../interfaces/pokemon-response.interface";

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {
  @Input() poke!: Result;
  @Output() pokemonEvent = new EventEmitter<Result>();

  constructor() { }

  ngOnInit(): void {
  }

  selectPokemon() {
    this.pokemonEvent.emit(this.poke);
  }
}
