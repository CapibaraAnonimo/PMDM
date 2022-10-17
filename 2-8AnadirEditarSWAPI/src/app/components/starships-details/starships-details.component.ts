import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {StarshipsService} from "../../services/starships.service";
import {Starship} from "../../interfaces/starships.inteface";

@Component({
  selector: 'app-starships-details',
  templateUrl: './starships-details.component.html',
  styleUrls: ['./starships-details.component.css']
})
export class StarshipsDetailsComponent implements OnInit {
  starship: any;
  id: any;

  constructor(private starshipService: StarshipsService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.starshipService.getStarshipById(Number(this.id)).subscribe(response => {
      this.starship = response;
    })
  }

  saveImg(ship: Starship){
    let personName = ship.url.split("/")[5]
    return `https://starwars-visualguide.com/assets/img/starships/${personName}.jpg`
  }

}
