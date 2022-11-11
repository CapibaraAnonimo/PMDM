import { Component, OnInit } from '@angular/core';
import { GasolinerasService } from "../../services/gasolineras.service";
import { GasolinerasResponse, ListaEESSPrecio } from "../../interfaces/gasolineras.interface";
import { FormControl } from "@angular/forms";
import { ProvinciaResponse } from "../../interfaces/provincias.interface";
import { ProvinciasService } from "../../services/provincias.service";
import { MunicipioResponse } from "../../interfaces/municipio.interface";
import { MunicipiosService } from "../../services/municipios.service";
import { forkJoin, Observable } from "rxjs";

@Component({
  selector: 'app-lista-gasolineras',
  templateUrl: './lista-gasolineras.component.html',
  styleUrls: ['./lista-gasolineras.component.css']
})
export class ListaGasolinerasComponent implements OnInit {
  gasolineras!: ListaEESSPrecio[];
  filteredGasolineras!: ListaEESSPrecio[];

  autoTicks = false;
  disabled = false;
  invert = false;
  max = 5;
  min = 0;
  showTicks = true;
  step = 0.01;
  thumbLabel = true;
  maxSliderValue = 5;
  vertical = false;
  tickInterval = 1;

  combustibles = new FormControl('');
  listaCombustibles: string[] = ['Gasoleo A', 'Gasoleo B', 'Gasoleo Premium', 'Gasolina 95 E10', 'Gasolina 95 E5',
    'Gasolina 95 E5 Premium', 'Gasolina 98 E10', 'Gasolina 98 E5', 'Hidrogeno'];
  conbustiblesSeleccionados: string[] = [];

  provinciaForm = new FormControl('');
  provincias: ProvinciaResponse[] = [];
  provinciasSeleccionadas: ProvinciaResponse[] = [];

  localidadesForm = new FormControl('');
  municipios: MunicipioResponse[] = [];
  municipiosSeleccionados: MunicipioResponse[] = [];

  consumo!: number;
  distanciaActual!: number;
  gasolineraActual!: ListaEESSPrecio;

  constructor(private gasolineraService: GasolinerasService, private provinciasService: ProvinciasService, private municipiosService: MunicipiosService) {
  }

  ngOnInit(): void {
    this.gasolineraService.getGasolineras().subscribe(response => {
      this.gasolineras = response.ListaEESSPrecio;
      this.filteredGasolineras = this.gasolineras;
    });

    this.provinciasService.getProvincias().subscribe(response => {
      this.provincias = response;
    })
  }

  filter() {
    if (this.conbustiblesSeleccionados.length !== 0) {
      this.filteredGasolineras = this.gasolineras.filter(gaso => {
        let valido = true;
        for (let [index, value] of Object.getOwnPropertyNames(gaso).entries()) {
          if (this.conbustiblesSeleccionados.find(element => ('Precio ' + element).toLowerCase() === value.toLowerCase())) {
            if (+(gaso[value as keyof typeof gaso].replace(',', '.')) >= this.maxSliderValue) {
              valido = false;
            }
          }
        }
        return valido;
      });
    } else
      this.filteredGasolineras = this.gasolineras;
  }

  actualizarMunicipios() {
    this.municipios = [];
    for (let provincia of this.provinciasSeleccionadas) {
      this.municipiosService.getMunicipios(provincia.IDPovincia).subscribe(response => {
        this.municipios = this.municipios.concat(response);
      });
    }
  }

  actualizarGasolineras() {
    let listaRequest: Observable<GasolinerasResponse>[] = [];

    if (this.municipiosSeleccionados.length !== 0) {
      this.gasolineras = [];

      for (let municipio of this.municipiosSeleccionados) {
        listaRequest.push(this.gasolineraService.getGasolinerasByMunicipio(municipio.IDMunicipio));
      }

      forkJoin([...listaRequest]).subscribe(response => {
        for (let re of response) {
          for (let r of re.ListaEESSPrecio) {
            this.gasolineras = this.gasolineras.concat(r);
          }
        }

        this.filteredGasolineras = this.gasolineras;
        this.filter();
      });

    }
  }

  getDistanceFromLatLonInKm(lat1: number, lon1: number, lat2: number, lon2: number) {
    let R = 6371; // Radius of the earth in km
    let dLat = this.deg2rad(lat2 - lat1);  // deg2rad below
    let dLon = this.deg2rad(lon2 - lon1);
    let a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2)
    ;
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    let d = R * c; // Distance in km
    return d;
  }

  deg2rad(deg: number) {
    return deg * (Math.PI / 180)
  }

  distanciaGasolinera(gaso: HTMLElement) {

    return 10;
  }

  calcularMejorGasolinera() {
    let mejorDistancia: number = 100000000000000000000000000000000;
    let mejorGasolinera: ListaEESSPrecio = this.gasolineraActual;

    for (let element of Array.from(document.getElementsByName('gasolinera'))) {
      alert(this.distanciaActual);
      if (this.distanciaActual < mejorDistancia){
        mejorDistancia = this.distanciaActual;
        mejorGasolinera = this.gasolineraActual;
      }
    }

    this.filteredGasolineras = [];
    this.filteredGasolineras.push(mejorGasolinera);
  }
}
