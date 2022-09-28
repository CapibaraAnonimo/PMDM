import { Component, OnInit } from '@angular/core';
import { MaterialImportsModule } from "../../material-imports/material-imports.module";

@Component({
  selector: 'app-modules',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.css']
})

export class FormularioRegistroComponent implements OnInit {
  value = 'Clear me';

  constructor() { }

  ngOnInit(): void {
  }

}
