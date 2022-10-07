import {Component, OnInit} from '@angular/core';
import {Person} from "../interfaces/people-response.interface";
import {PeopleService} from "../services/people.service";
import {Film} from "../interfaces/films-response.interface";

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
  peopleList: Person[] = [];
  filmList: Film[] = [];

  constructor(private peopleService: PeopleService) {
  }

  ngOnInit(): void {
    this.peopleService.peopleList().subscribe(response => {
      this.peopleList = response.results
    })
    this.peopleService.filmList().subscribe(response => {
      this.filmList = response.results;
    })
  }

  pertenencia(film: Film, films: string[]) {
    if (films.includes(film.url))
      return true;
    else
      return false;
  }
}
