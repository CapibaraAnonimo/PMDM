import { Component, OnInit } from '@angular/core';
import {catchError, map, Observable, of} from "rxjs";
import {AddPerdidoDto} from "../../models/dtos/perdido.dto";
import {EncontradosInterface} from "../../models/interfaces/encontrados.interface";
import {HttpClient} from "@angular/common/http";
import {EncontradosService} from "../../services/encontrados.service";

@Component({
  selector: 'app-encontrado',
  templateUrl: './encontrado.component.html',
  styleUrls: ['./encontrado.component.css']
})
export class EncontradoComponent implements OnInit {
  apiLoaded: Observable<boolean>;
  encontrados!: EncontradosInterface[];
  center = {lng: -3.7025600, lat: 40.4165000};
  coor: any;


  encontrado!: AddPerdidoDto;
  submitted = false;
  nombre: string = '';

  constructor(private  encontradoService: EncontradosService, httpClient: HttpClient) {
    this.apiLoaded = httpClient.jsonp('https://maps.googleapis.com/maps/api/js?AIzaSyC4GrRSpLl5avrtfOK9OSKrGHOiI1dXoms', 'callback')
      .pipe(
        map(() => true),
        catchError(() => of(false)),
      );
  }

  ngOnInit(): void {
    this.coor = {lng: -3.7025600, lat: 40.4165000};
    this.getAllPerdidos();
  }

  saveEncontrado(): void{
    if (this.nombre != '' && this.nombre != null) {
      this.encontrado = new AddPerdidoDto(this.nombre, this.coor.lat, this.coor.lng)
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
