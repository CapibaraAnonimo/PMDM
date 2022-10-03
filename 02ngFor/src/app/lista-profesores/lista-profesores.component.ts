import { Component, OnInit } from '@angular/core';

export interface Profesor{
  nombre: string;
  curso: string;
}

const LISTAPROFESORES: Profesor[] = [
  {nombre: 'Profesor1', curso: '2ºDAM'},
  {nombre: 'Profesor2', curso: '2ºDAM'},
  {nombre: 'Profesor3', curso: '2ºDAM'},
  {nombre: 'Profesor4', curso: '2ºDAM'}
]

@Component({
  selector: 'app-lista-profesores',
  templateUrl: './lista-profesores.component.html',
  styleUrls: ['./lista-profesores.component.css']
})
export class ListaProfesoresComponent implements OnInit {
  listaProfesores = LISTAPROFESORES;

  constructor() { }

  ngOnInit(): void {
  }

}
