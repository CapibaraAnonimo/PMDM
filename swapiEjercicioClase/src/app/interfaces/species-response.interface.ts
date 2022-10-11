import {World} from "./worlds-response.interface";

export interface Specie {
  name: string;
  classification: string;
  designation: string;
  average_height: string;
  skin_colors: string;
  hair_colors: string;
  eye_colors: string;
  average_lifespan: string;
  homeworld: string;
  language: string;
  people: string[];
  films: string[];
  created: Date;
  edited: Date;
  url: string;
  homeworldObject: World;
}

export interface SpeciesResponse {
  count: number;
  next: string;
  previous?: any;
  results: Specie[];
}
