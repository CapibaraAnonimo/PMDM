import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Film} from "../../interfaces/films.interface";
import {PeopleService} from "../../services/people.service";

@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.css']
})
export class PeopleDetailsComponent implements OnInit {
  person: any;
  id: any;

  constructor(private peopleService: PeopleService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.peopleService.getPersonById(Number(this.id)).subscribe(response => {
      this.person = response;
    })
  }

  saveImg(person: Film){
    let personName = person.url.split("/")[5]
    return `https://starwars-visualguide.com/assets/img/characters/${personName}.jpg`
  }

}
