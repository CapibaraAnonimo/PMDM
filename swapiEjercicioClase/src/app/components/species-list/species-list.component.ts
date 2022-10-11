import {Component, OnInit} from '@angular/core';
import {PeopleService} from "../../services/people.service";
import {Specie} from "../../interfaces/species-response.interface";

@Component({
  selector: 'app-species-list',
  templateUrl: './species-list.component.html',
  styleUrls: ['./species-list.component.css']
})
export class SpeciesListComponent implements OnInit {
  speciesList: Specie[] = [];
  pages: number[] = [];
  loadedPage = 0;

  constructor(private peopleService: PeopleService) {
  }

  ngOnInit(): void {
    this.peopleService.speciesList(1).subscribe(response => {
      this.speciesList = response.results;
      this.loadedPage = 1;
      let number = Math.floor(response.count / 10) + 1;
      for (let i = 1; i <= number; i++) {
        this.pages.push(i);
      }
    })
  }

  changePage(page: number) {
    if (page > 0 && page < this.pages.length + 1) {
      this.peopleService.speciesList(page).subscribe(response => {
        this.speciesList = []
        this.speciesList = response.results;
        this.loadedPage = page;
      })
    }
  }
}
