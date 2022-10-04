import {Component, OnInit} from '@angular/core';

const ALIMENTOS: string[] = ['Alimento1', 'Alimento2', 'Alimento3', 'Alimento4', 'Alimento5', 'Alimento6'];

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  listaAlimentos = ALIMENTOS;
  busqueda = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  applyFilter() {
    this.listaAlimentos = [];
    if (this.busqueda !== '') {
      for (let alimento of ALIMENTOS) {
        if (alimento.toLowerCase().includes(this.busqueda.toLowerCase()))
          this.listaAlimentos.push(alimento);
      }
    } else {
      this.listaAlimentos = ALIMENTOS;
    }
  }
}
