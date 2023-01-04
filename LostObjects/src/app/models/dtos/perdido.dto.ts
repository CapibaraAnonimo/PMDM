import {PerdidosInterface} from "../interfaces/perdidos.interface";

export class AddPerdidoDto implements PerdidosInterface {
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
