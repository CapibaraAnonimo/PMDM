import {Component, OnInit} from '@angular/core';

export interface Alumno {
  id: number;
  nombre: string;
  apellidos: string;
  fechaNacimiento: string;
  curso: string;
}

const ELEMENT_DATA: Alumno[] = [
  {id: 1, nombre: 'Adrián', apellidos: 'Arnaiz Cano', fechaNacimiento: '26/11/2002', curso: '2 DAM'},
  {id: 2, nombre: 'Adrián', apellidos: 'Arnaiz Cano', fechaNacimiento: '26/11/2002', curso: '2 DAM'},
  {id: 3, nombre: 'Adrián', apellidos: 'Arnaiz Cano', fechaNacimiento: '26/11/2002', curso: '2 DAM'},
  {id: 4, nombre: 'Adrián', apellidos: 'Arnaiz Cano', fechaNacimiento: '26/11/2002', curso: '2 DAM'}
];

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nombre', 'apellidos', 'fechaNacimiento', 'curso', 'acciones'];
  dataSource = ELEMENT_DATA;
  idCheck = true;
  nombreCheck = true;
  apellidosCheck = true;
  fechaCheck = true;
  cursoCheck =true;

  constructor() {
  }

  ngOnInit(): void {
  }

  delete(element: number) {
    this.dataSource = this.dataSource.filter((u) => u.id !== element);
  }
}
