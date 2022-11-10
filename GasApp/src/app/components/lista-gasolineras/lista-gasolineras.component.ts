import {Component, OnInit} from '@angular/core';
import {GasolinerasService} from "../../services/gasolineras.service";
import {ListaEESSPrecio} from "../../interfaces/gasolineras.interface";
import {FormControl} from "@angular/forms";
import {ProvinciaResponse} from "../../interfaces/provincias.interface";
import {ProvinciasService} from "../../services/provincias.service";
import {MunicipioResponse} from "../../interfaces/municipio.interface";
import {MunicipiosService} from "../../services/municipios.service";

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
  step = 0.1;
  thumbLabel = true;
  maxSliderValue = 0;
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
    if (this.municipiosSeleccionados.length !== 0) {
      this.gasolineras = [];

      this.gasolineras = this.gasolinerasVariosMunicipios(this.municipiosSeleccionados.length);

      this.filteredGasolineras = this.gasolineras;
      alert(this.gasolineras.length);
      this.filter();
    }
  }

  gasolinerasVariosMunicipios(iTotal: number, i: number = 0): ListaEESSPrecio[] {
    let gasos: ListaEESSPrecio[] = [];

    gasos = this.gasolineraService.getGasolinerasByMunicipio(this.municipiosSeleccionados[i].IDMunicipio).subscribe(response => {
      gasos = gasos.concat(response.ListaEESSPrecio);
      if (i < iTotal) {
        i += 1;
        gasos = gasos.concat(this.gasolinerasVariosMunicipios(iTotal, i));
      }
    });
    return gasos;
  }
}
