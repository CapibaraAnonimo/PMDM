import {Component, OnInit} from '@angular/core';
import {CollectionsService} from "../services/collections.service";
import {MoviesService} from "../services/movies.service";
import {Film} from "../interfaces/movie.interface";

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
  collection: any;
  movieList: Film[] = [];

  constructor(private collections: CollectionsService, private movies: MoviesService) {
  }

  ngOnInit(): void {
    this.collections.getCollectionById(119).subscribe(response => {
      this.collection = response;
    })
    for (let i = 1; i < 200; i++) {
      this.getMovieById(i);
    }
    this.movieList.sort(function compare(a, b) {
      if (a.id > b.id)
        return -1;
      if (a.id < b.id)
        return 1;
      else
        return 0;
    })
  }

  getMovieById(id: number) {
    this.movies.getMovieById(id).subscribe(response => {
      this.movieList.push(response);
    })
  }

}
