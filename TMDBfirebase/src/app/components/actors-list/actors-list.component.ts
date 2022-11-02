import {Component, OnInit} from '@angular/core';
import {ActorsService} from "../../services/actors.service";
import {Actor} from "../../interfaces/actors.interface";
import {MatDialog} from "@angular/material/dialog";
import {ActorsDialogComponent} from "../actors-dialog/actors-dialog.component";

@Component({
  selector: 'app-actors-list',
  templateUrl: './actors-list.component.html',
  styleUrls: ['./actors-list.component.css']
})
export class ActorsListComponent implements OnInit {
  actors: Actor[] = [];
  totalPages: number = 0;
  page: number = 1;
  navigator: number = 0;

  constructor(private actorService: ActorsService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.actorService.getActorsPopular().subscribe(response => {
      this.actors = response.results;
      this.totalPages = response.total_pages;

      this.navigator = document.getElementById('navigator')!.offsetWidth/2 + document.getElementById('navigator')!.offsetWidth%2;
      document.getElementById('navigator')!.style["marginLeft"] = navigator.toString();
    });
  }

  changePage(page: number) {
    this.actorService.getActorsPopular(page.toString()).subscribe(response => {
      this.actors = response.results;
      this.page = response.page;

      this.navigator = document.getElementById('navigator')!.offsetWidth/2 + document.getElementById('navigator')!.offsetWidth%2;
      document.getElementById('navigator')!.style.marginLeft = navigator.toString();
    });
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string, actor: number): void {
    this.dialog.open(ActorsDialogComponent, {
      width: '700px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: {
        actor: actor,
      }
    });
  }
}
