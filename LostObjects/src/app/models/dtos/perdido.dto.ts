import {PerdidosInterface} from "../interfaces/perdidos.interface";

export class AddPerdidoDto implements PerdidosInterface{
  usuario: string = 'Persona genérica';
  lat: number = 0;
  lng: number = 0;

  constructor(usuario: string, lat: number, lng: number) {
    this.usuario = usuario;
    this.lat = lat;
    this.lng = lng;
  }
}
