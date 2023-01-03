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
import { PerdidoComponent } from './components/perdido/perdido.component';
import {environment} from "../environments/environment";
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
import { EncontradoComponent } from './components/encontrado/encontrado.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaGasolinerasComponent,
    CartaGasolineraComponent,
    PerdidoComponent,
    EncontradoComponent
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
    HttpClientJsonpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
