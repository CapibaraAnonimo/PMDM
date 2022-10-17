import {Component, OnInit} from '@angular/core';
import {People} from 'src/app/interfaces/people.interface';
import {PeopleService} from 'src/app/services/people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  peopleList: People[] = [];
  numPages = 0;
  currentPage = 0;

  constructor(private peopleService: PeopleService) {
  }

  ngOnInit(): void {
    this.peopleService.getPeople(1).subscribe(resp => {
      this.peopleList = resp.results;
      this.numPages = Math.ceil(resp.count / 10);
      this.currentPage = 1;
    })
  }

  getPage(page: number) {
    if (page > 0 && page < this.numPages + 1) {
      this.peopleService.getPeople(page).subscribe(resp => {
        this.peopleList = resp.results;
        this.numPages = Math.ceil(resp.count / 10);
        this.currentPage = page;
      });
    }
  }

  counter() {
    return new Array(this.numPages);
  }

  saveImg(people: People) {
    let namePers = this.getIdPerson(people)
    return `https://starwars-visualguide.com/assets/img/characters/${namePers}.jpg`
  }

  getIdPerson(person: People) {
    return person.url.split("/")[5]
  }

}
