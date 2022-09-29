import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.css']
})
export class FormularioRegistroComponent implements OnInit {
  nombre = "";
  apellidos = '';
  nif = '';
  email = '';
  telefono = '';
  sexo = '';
  sexoOpciones = ['Masculino', 'Femenino'];
  conocer = '';
  conocerOpciones = ['Buscando en google', 'A través de un amigo', 'Por un exVendedor de seguros'];

  visible = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  mostrarInfo() {
    this.visible = this.nombre != '' && this.apellidos != '' && this.nif != '' && this.email != '' && this.telefono != '' && this.sexo != '' && this.conocer != '';
  }
}
