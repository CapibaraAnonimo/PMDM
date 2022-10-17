import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Planet } from 'src/app/interfaces/planets.interface';
import { PlanetsService } from 'src/app/services/planets.service';

@Component({
  selector: 'app-planets-details',
  templateUrl: './planets-details.component.html',
  styleUrls: ['./planets-details.component.css']
})
export class PlanetsDetailsComponent implements OnInit {
  planet: any;
  id: any;

  constructor(private planetService: PlanetsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.planetService.getPlanetById(Number(this.id)).subscribe(response => {
      this.planet = response;
    })
  }

  saveImg(planet: Planet){
    let namePlanet = planet.url.split("/")[5]
    return `https://starwars-visualguide.com/assets/img/planets/${namePlanet}.jpg`
  }


}
