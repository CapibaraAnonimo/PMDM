import {Component, OnInit} from '@angular/core';
import {Person} from "../interfaces/people-response.interface";
import {PeopleService} from "../services/people.service";

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
  peopleList: Person[] = [];

  constructor(private peopleService: PeopleService) {
  }

  ngOnInit(): void {
    this.peopleService.peopleList().subscribe(response => {
      this.peopleList = response.results;
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
}
