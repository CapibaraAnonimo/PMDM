import {Component, OnInit} from '@angular/core';
import {MatchService} from "../../services/match.service";
import {catchError, map, Observable, of} from "rxjs";
import {PerdidosService} from "../../services/perdidos.service";
import {HttpClient} from "@angular/common/http";
import {EncontradosService} from "../../services/encontrados.service";
import {PerdidosInterface} from "../../models/interfaces/perdidos.interface";
import {EncontradosInterface} from "../../models/interfaces/encontrados.interface";
import {AddMatchDto} from "../../models/dtos/match.dto";
import {MatchsInterface} from "../../models/interfaces/matchs.interface";

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {
  perdidos!: PerdidosInterface[];
  encontrados!: EncontradosInterface[];
  matches!: MatchsInterface[];
  match!: MatchsInterface;
  apiLoaded: Observable<boolean>;

  constructor(private perdidoService: PerdidosService, private httpClient: HttpClient,
              private encontradoService: EncontradosService, private matchService: MatchService) {
    this.apiLoaded = httpClient.jsonp('https://maps.googleapis.com/maps/api/js?AIzaSyC4GrRSpLl5avrtfOK9OSKrGHOiI1dXoms&libraries=geometry', 'callback')
      .pipe(
        map(() => true),
        catchError(() => of(false)),
      );
  }

  ngOnInit(): void {
    this.getAllEncontrados();
    this.getAllPerdidos();
    this.getAllMatches();
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

  getAllMatches(): void {
    this.matchService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({id: c.payload.doc.id, ...c.payload.doc.data()}))
      )
    ).subscribe(data => {
      this.matches = data;
    });
  }

  findMatches() {
    for (let p of this.perdidos) {
      if (p.lat != undefined && p.lng != undefined) {
        for (let e of this.encontrados) {
          if (e.lat != undefined && e.lng != undefined && p.id != undefined && e.id != undefined) {
            alert(google.maps.geometry.spherical.computeDistanceBetween({lat: p.lat, lng: p.lng}, {
              lat: e.lat, lng: e.lng}));
            alert(this.comprobarMatch(p.lat, p.lng, e.lat, e.lng))
            if (google.maps.geometry.spherical.computeDistanceBetween({lat: p.lat, lng: p.lng}, {
              lat: e.lat, lng: e.lng}) <= 1000 && this.comprobarMatch(p.lat, p.lng, e.lat, e.lng)) {
              alert("Se guarda algo")
              this.saveMatch(p.id, e.id);
            }
          }
        }
      }
    }
  }

  saveMatch(perdido: string, encontrado: string): void {
    this.match = new AddMatchDto(perdido, encontrado);
    this.perdidoService.create(this.match).then(() => {
      alert('Created new lost object successfully!');
      this.getAllMatches();
    });
  }

  comprobarMatch(latp: number, lngp: number, late:number, lnge:number) {//TODO esto no funciona por algún motivo
    let correcto: boolean = false;
    let perdido: PerdidosInterface;
    let encontrado: EncontradosInterface;
    for (let mat of this.matches) {
      for (let per of this.perdidos) {
        if (per.id == mat.id) {
          perdido = per;
          if (perdido.lat != undefined && perdido.lng != undefined) {
            if (perdido.lat == latp && perdido.lng == lngp) {
              correcto = true;
            }
          }
          break;
        }
      }
      if (correcto) {
        for (let enc of this.encontrados) {
          if (enc.id == mat.id) {
            encontrado = enc;
            if (encontrado.lat != undefined && encontrado.lng != undefined) {
              correcto = encontrado.lat == late && encontrado.lng == lnge;
            }
            break;
          }
        }
      }
    }
    return correcto;
  }
}
