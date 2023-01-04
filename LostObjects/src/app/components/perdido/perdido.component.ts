import {Component, OnInit} from '@angular/core';
import {PerdidosService} from "../../services/perdidos.service";
import {catchError, map, Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {AddPerdidoDto} from "../../models/dtos/perdido.dto";
import {PerdidosInterface} from "../../models/interfaces/perdidos.interface";
import {EncontradosInterface} from "../../models/interfaces/encontrados.interface";
import {EncontradosService} from "../../services/encontrados.service";


@Component({
  selector: 'app-perdidos',
  templateUrl: './perdido.component.html',
  styleUrls: ['./perdido.component.css']
})
export class PerdidoComponent implements OnInit {
  apiLoaded: Observable<boolean>;
  perdidos!: PerdidosInterface[];
  encontrados!: EncontradosInterface[];
  center = {lng: -3.7025600, lat: 40.4165000};
  coor: any;


  perdido!: AddPerdidoDto;
  submitted = false;
  nombre: string = '';

  constructor(private perdidoService: PerdidosService, private httpClient: HttpClient,
              private encontradoService: EncontradosService) {
    this.apiLoaded = httpClient.jsonp('https://maps.googleapis.com/maps/api/js?AIzaSyC4GrRSpLl5avrtfOK9OSKrGHOiI1dXoms', 'callback')
      .pipe(
        map(() => true),
        catchError(() => of(false)),
      );
  }

  ngOnInit(): void {
    this.coor = {lng: -3.7025600, lat: 40.4165000};
    this.getAllPerdidos();
    this.getAllEncontrados();
  }

  savePerdido(): void {
    if (this.nombre != '' && this.nombre != null) {
      this.perdido = new AddPerdidoDto(this.nombre, this.coor.lat, this.coor.lng)
      this.perdidoService.create(this.perdido).then(() => {
        alert('Created new lost object successfully!');
        this.submitted = true;
        this.getAllPerdidos();
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
        changes.map(c => ({id: c.payload.doc.id, ...c.payload.doc.data()}))
      )
    ).subscribe(data => {
      this.perdidos = data;
    });
  }

  getAllEncontrados(): void {
    this.encontradoService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({id: c.payload.doc.id, ...c.payload.doc.data()}))
      )
    ).subscribe(data => {
      this.encontrados = data;
    });
  }
}
