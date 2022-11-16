import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ListaGasolinerasComponent} from './components/lista-gasolineras/lista-gasolineras.component';
import {HttpClientModule, HttpClientJsonpModule} from "@angular/common/http";
import {MaterialImportsModule} from "./modules/material-imports.module";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CartaGasolineraComponent} from './components/carta-gasolinera/carta-gasolinera.component';
import {GoogleMapsModule} from "@angular/google-maps";

@NgModule({
  declarations: [
    AppComponent,
    ListaGasolinerasComponent,
    CartaGasolineraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialImportsModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    GoogleMapsModule,
    HttpClientJsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
