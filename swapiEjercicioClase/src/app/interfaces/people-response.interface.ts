import {Film} from "./films-response.interface";
import {World} from "./worlds-response.interface";

export interface Person {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: Date;
  edited: Date;
  url: string;
  filmsObjects: Film[];
  homeworldObject: World;
}

export interface PeopleResponse {
  count: number;
  next: string;
  previous?: any;
  results: Person[];
}
