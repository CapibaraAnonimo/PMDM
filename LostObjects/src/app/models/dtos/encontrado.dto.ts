import {EncontradosInterface} from "../interfaces/encontrados.interface";

export class AddEncontradoDto implements EncontradosInterface{
  id?: string;
  usuario?: string;
  lat?: number;
  lng?: number;
  categoria?: string;

  constructor(usuario: string, lat: number, lng: number, categoria: string) {
    this.usuario = usuario;
    this.lat = lat;
    this.lng = lng;
    this.categoria = categoria;
  }
}
