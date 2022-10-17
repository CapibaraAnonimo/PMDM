import { Component, OnInit } from '@angular/core';
import {FilmsService} from "../../services/films.service";
import {Film} from "../../interfaces/films.interface";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-films-details',
  templateUrl: './films-details.component.html',
  styleUrls: ['./films-details.component.css']
})
export class FilmsDetailsComponent implements OnInit {
  film: any;
  id: any;

  constructor(private filmService: FilmsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.filmService.getFilmById(Number(this.id)).subscribe(response => {
      this.film = response;
    })
  }

  saveImg(film: Film){
    let nameFilm = film.url.split("/")[5]
    return `https://starwars-visualguide.com/assets/img/films/${nameFilm}.jpg`
  }

}
