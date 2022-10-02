import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  nombre: string;
  apellidos: string;
  fechaNacimiento: string;
  curso: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {nombre: 'Adrián', apellidos: 'Arnaiz Cano', fechaNacimiento: '26/11/2002', curso: '2 DAM'},
];

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'apellidos', 'fechaNacimiento', 'curso'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
