import {MatchsInterface} from "../interfaces/matchs.interface";

export class AddMatchDto implements MatchsInterface{
  id?: string;
  perdido?: string;
  encontrado?: string;

  constructor(perdido: string, encontrado: string) {
    this.perdido = perdido;
    this.encontrado = encontrado;
  }
}
