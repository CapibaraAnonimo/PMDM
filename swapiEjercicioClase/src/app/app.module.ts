import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PeopleListComponent} from './components/people-list/people-list.component';
import {MaterialImportsModule} from "./modules/material-imports.module";
import { HttpClientModule } from '@angular/common/http';
import {AppRoutingModule} from "./app-routing.module";
import { InicioComponent } from './components/inicio/inicio.component';
import { SpeciesListComponent } from './components/species-list/species-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PeopleListComponent,
    InicioComponent,
    SpeciesListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialImportsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
