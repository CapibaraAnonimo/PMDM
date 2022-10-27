import {Component, OnInit} from '@angular/core';
import {ActorsService} from "../../services/actors.service";
import {Actor} from "../../interfaces/actors.interface";

@Component({
  selector: 'app-actors-list',
  templateUrl: './actors-list.component.html',
  styleUrls: ['./actors-list.component.css']
})
export class ActorsListComponent implements OnInit {
  actors: Actor[] = [];
  page: number = 1;

  constructor(private actorService: ActorsService) {
  }

  ngOnInit(): void {
    this.actorService.getActorsPopular().subscribe(response => {
      this.actors = response.results;
    });
  }

  public changePage(page: number){
    this.actorService.getActorsPopular(page.toString()).subscribe(response => {
      this.actors = response.results;
      this.page = response.page;
    });
  }
}
