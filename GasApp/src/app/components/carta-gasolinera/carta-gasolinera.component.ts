import { Component, Input, OnInit } from '@angular/core';
import { ListaEESSPrecio } from "../../interfaces/gasolineras.interface";

@Component({
  selector: 'app-carta-gasolinera',
  templateUrl: './carta-gasolinera.component.html',
  styleUrls: ['./carta-gasolinera.component.css']
})
export class CartaGasolineraComponent implements OnInit {
  @Input() gasolinera!: ListaEESSPrecio;
  @Input() distancia!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
