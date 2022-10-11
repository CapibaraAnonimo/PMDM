import {Component, OnInit} from '@angular/core';
import {Person} from "../../interfaces/people-response.interface";
import {PeopleService} from "../../services/people.service";

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
  peopleList: Person[] = [];
  pages: number[] = [];
  loadedPage = 0;

  constructor(private peopleService: PeopleService) {
  }

  ngOnInit(): void {
    this.peopleService.peopleList(1).subscribe(response => {
      this.peopleList = response.results;
      this.loadedPage = 1;
      let number = Math.floor(response.count / 10) + 1;
      for (let i = 1; i <= number; i++) {
        this.pages.push(i);
      }
      this.peopleList.forEach(person => {
        person.filmsObjects = [];
        person.films.forEach(film => {
          this.peopleService.getFilmByUrl(film).subscribe(filmResponse => {
            person.filmsObjects.push(filmResponse);
          })
        })
        this.peopleService.getWorldByURL(person.homeworld).subscribe(worldResponse => {
          person.homeworldObject = worldResponse;
        })
      })
    })
  }

  getImageURL(person: Person) {
    let baseUrlImage = 'https://starwars-visualguide.com/assets/img/characters/';
    let num = '';
    if (person.url.charAt(person.url.length - 3) != '/') {
      num = person.url.charAt(person.url.length - 3)
    }
    num = num + person.url.charAt(person.url.length - 2)
    return baseUrlImage + num + '.jpg'
  }

  changePage(page: number) {
    if (page > 0 && page < this.pages.length + 1) {
      this.peopleService.peopleList(page).subscribe(response => {
        this.peopleList = []
        this.peopleList = response.results;
        this.loadedPage = page;
        this.peopleList.forEach(person => {
          person.filmsObjects = [];
          person.films.forEach(film => {
            this.peopleService.getFilmByUrl(film).subscribe(filmResponse => {
              person.filmsObjects.push(filmResponse);
            })
          })
          this.peopleService.getWorldByURL(person.homeworld).subscribe(worldResponse => {
            person.homeworldObject = worldResponse;
          })
        })
      })
    }
  }
}
