import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ListaEESSPrecio } from "../../interfaces/gasolineras.interface";
import { Subject } from "rxjs";

@Component({
  selector: 'app-carta-gasolinera',
  templateUrl: './carta-gasolinera.component.html',
  styleUrls: ['./carta-gasolinera.component.css']
})
export class CartaGasolineraComponent implements OnInit {
  @Input() gasolinera!: ListaEESSPrecio;
  @Input() distancia!: number;
  @Input() send!: number;
  @Input() parentSubject!: Subject<any>;
  @Output() executeEvent = new EventEmitter<boolean>();
  @Output() distanciaEvent = new EventEmitter<[number, ListaEESSPrecio]>();

  constructor() {
  }

  ngOnInit(): void {
  }

  sendEvent() {
    alert('se usa');
    this.distanciaEvent.emit([this.distancia, this.gasolinera]);
  }

  execute(){
    this.executeEvent.emit(true);
  }
}
