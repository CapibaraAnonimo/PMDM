import {Component, OnInit} from '@angular/core';
import {Starship} from 'src/app/interfaces/starships.inteface';
import {StarshipsService} from 'src/app/services/starships.service';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent implements OnInit {
  starshipList: Starship[] = [];
  numPages = 0;
  currentPage = 0;

  constructor(private starshipService: StarshipsService) {
  }

  ngOnInit(): void {
    this.starshipService.getStarships(1).subscribe(resp => {
      this.starshipList = resp.results;
      this.numPages = Math.ceil(resp.count / 10);
      this.currentPage = 1;
    });
  }

  getPage(page: number) {
    this.starshipService.getStarships(page).subscribe(resp => {
      this.starshipList = resp.results;
      this.numPages = Math.ceil(resp.count / 10);
      this.currentPage = page;
    });
  }

  counter() {
    return new Array(this.numPages);
  }

  saveImg(starship: Starship) {
    let nameStarship = this.getIdStarship(starship);
    return `https://starwars-visualguide.com/assets/img/starships/${nameStarship}.jpg`
  }

  getIdStarship(ship: Starship){
    return ship.url.split("/")[5];
  }

}
