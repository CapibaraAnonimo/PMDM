import {EncontradosInterface} from "../interfaces/encontrados.interface";

export class AddEncontradoDto implements EncontradosInterface{
  id?: string;
  usuario?: string;
  lat?: number;
  lng?: number;

  constructor(usuario: string, lat: number, lng: number) {
    this.usuario = usuario;
    this.lat = lat;
    this.lng = lng;
  }
}
