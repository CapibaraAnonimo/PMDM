import {EncontradosInterface} from "../interfaces/encontrados.interface";

export class AddEncontradoDto implements EncontradosInterface{
  usuario: string = 'Persona genérica';
  lat: number = 0;
  lng: number = 0;

  constructor(usuario: string, lat: number, lng: number) {
    this.usuario = usuario;
    this.lat = lat;
    this.lng = lng;
  }
}
