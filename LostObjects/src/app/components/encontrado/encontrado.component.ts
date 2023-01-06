import { Component, OnInit } from '@angular/core';
import {catchError, map, Observable, of} from "rxjs";
import {EncontradosInterface} from "../../models/interfaces/encontrados.interface";
import {HttpClient} from "@angular/common/http";
import {EncontradosService} from "../../services/encontrados.service";
import {AddEncontradoDto} from "../../models/dtos/encontrado.dto";
import {PerdidosService} from "../../services/perdidos.service";
import {PerdidosInterface} from "../../models/interfaces/perdidos.interface";

@Component({
  selector: 'app-encontrado',
  templateUrl: './encontrado.component.html',
  styleUrls: ['./encontrado.component.css']
})
export class EncontradoComponent implements OnInit {
  apiLoaded: Observable<boolean>;
  encontrados!: EncontradosInterface[];
  perdidos!: PerdidosInterface[];
  center = {lng: -3.7025600, lat: 40.4165000};
  coor: any;


  encontrado!: AddEncontradoDto;
  submitted = false;
  nombre: string = '';
  categoria: string = 'Gofre';

  constructor(private  encontradoService: EncontradosService, httpClient: HttpClient, private  perdidoService: PerdidosService) {
    this.apiLoaded = httpClient.jsonp('https://maps.googleapis.com/maps/api/js?AIzaSyC4GrRSpLl5avrtfOK9OSKrGHOiI1dXoms', 'callback')
      .pipe(
        map(() => true),
        catchError(() => of(false)),
      );
  }

  ngOnInit(): void {
    this.coor = {lng: -3.7025600, lat: 40.4165000};
    this.getAllPerdidos();
    this.getAllEncontrados()
  }

  saveEncontrado(): void{
    if (this.nombre != '' && this.nombre != null) {
      this.encontrado = new AddEncontradoDto(this.nombre, this.coor.lat, this.coor.lng, this.categoria)
      this.encontradoService.create(this.encontrado).then(() => {
        alert('Created new found object successfully!');
        this.submitted = true;
      });
    } else
      alert("Not allowed name")
  }

  createMarker($event: google.maps.MapMouseEvent | google.maps.IconMouseEvent) {
    this.coor = $event.latLng;
    this.coor = {lng: $event.latLng?.lng(), lat: $event.latLng?.lat()}
  }

  getAllPerdidos(): void {
    this.perdidoService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data()})
        )
      )
    ).subscribe(data => {
      this.perdidos = data;
    });
  }

  getAllEncontrados(): void {
    this.encontradoService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data()})
        )
      )
    ).subscribe(data => {
      this.encontrados = data;
    });
  }
}
