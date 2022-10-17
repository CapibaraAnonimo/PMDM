import {Component, OnInit} from '@angular/core';
import {Specie} from 'src/app/interfaces/species.interface';
import {SpeciesService} from 'src/app/services/species.service';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css'],
})
export class SpeciesComponent implements OnInit {
  speciesList: Specie[] = [];
  numPages = 0;
  currentPage = 0;

  constructor(private speciesService: SpeciesService) {
  }

  ngOnInit(): void {
    this.speciesService.getSpecies(1).subscribe(resp => {
      this.speciesList = resp.results;
      this.numPages = Math.ceil(resp.count / 10);
      this.currentPage = 1;
    });
  }

  getPage(page: number) {
    this.speciesService.getSpecies(page).subscribe(resp => {
      this.speciesList = resp.results;
      this.numPages = Math.ceil(resp.count / 10);
      this.currentPage = page;
    });
  }

  counter() {
    return new Array(this.numPages);
  }

  saveImg(specie: Specie) {
    let nameSpecie = this.getIdSpecie(specie)
    return `https://starwars-visualguide.com/assets/img/species/${nameSpecie}.jpg`
  }

  getIdSpecie(specie: Specie) {
    return specie.url.split("/")[5]
  }

  //
}
