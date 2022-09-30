import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DesplegableComponent } from './desplegable/desplegable.component';
import { MaterialImportsModule } from "./modules/material-imports.module";

@NgModule({
  declarations: [
    AppComponent,
    DesplegableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialImportsModule
  ],
  providers: [],
  bootstrap: [AppComponent, DesplegableComponent],
})
export class AppModule { }
