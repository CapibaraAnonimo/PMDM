import {Component, OnInit} from '@angular/core';
import {Film} from 'src/app/interfaces/films.interface';
import {FilmsService} from 'src/app/services/films.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css'],
})
export class FilmsComponent implements OnInit {
  filmList: Film[] = [];

  constructor(private filmService: FilmsService) {
  }

  ngOnInit(): void {
    this.filmService.getFilms().subscribe((resp) => {
      this.filmList = resp.results;
    });
  }

  saveImg(film: Film) {
    let nameFilm = film.url.split("/")[5]
    return `https://starwars-visualguide.com/assets/img/films/${nameFilm}.jpg`
  }
}
