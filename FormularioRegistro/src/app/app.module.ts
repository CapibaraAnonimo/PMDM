import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialImportsModule} from "./material-imports/material-imports.module";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FormularioRegistroComponent} from "./components/formulario-registro/formulario-registro.component";

@NgModule({
  declarations: [
    AppComponent,
    FormularioRegistroComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialImportsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
