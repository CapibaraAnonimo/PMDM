import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Specie } from 'src/app/interfaces/species.interface';
import { SpeciesService } from 'src/app/services/species.service';

@Component({
  selector: 'app-species-details',
  templateUrl: './species-details.component.html',
  styleUrls: ['./species-details.component.css'],
})
export class SpeciesDetailsComponent implements OnInit {
  specie: any;
  id: any;

  constructor(
    private specieService: SpeciesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.specieService.getSpecieById(Number(this.id)).subscribe(response => {
      this.specie = response;
    })
  }

  saveImg(specie: Specie){
    let nameSpecie = specie.url.split("/")[5]
    return `https://starwars-visualguide.com/assets/img/species/${nameSpecie}.jpg`
  }

}
