import {Component, OnInit} from '@angular/core';
import {GasolinerasService} from "../../services/gasolineras.service";
import {ListaEESSPrecio} from "../../interfaces/gasolineras.interface";

@Component({
  selector: 'app-lista-gasolineras',
  templateUrl: './lista-gasolineras.component.html',
  styleUrls: ['./lista-gasolineras.component.css']
})
export class ListaGasolinerasComponent implements OnInit {
  gasolineras!: ListaEESSPrecio[];

  constructor(private gasolineraService: GasolinerasService) {
  }

  ngOnInit(): void {
    this.gasolineraService.getGasolineras().subscribe(response => {
      this.gasolineras = response.ListaEESSPrecio;
    });
  }

}
