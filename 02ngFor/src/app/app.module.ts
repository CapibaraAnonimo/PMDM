import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ListaProfesoresComponent} from './lista-profesores/lista-profesores.component';
import {MaterialImportsModule} from "./modules/material-imports.module";

@NgModule({
  declarations: [
    AppComponent,
    ListaProfesoresComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialImportsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
