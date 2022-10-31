import {Component, OnInit} from '@angular/core';
import {ActorsService} from "../../services/actors.service";
import {Actor} from "../../interfaces/actors.interface";
import {MatDialog} from "@angular/material/dialog";
import {ActorsDialogComponent} from "../actors-dialog/actors-dialog.component";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationService} from "../../services/authentication.service";
import {NewSessionDto} from "../../dto/new-session.dto";

@Component({
  selector: 'app-actors-list',
  templateUrl: './actors-list.component.html',
  styleUrls: ['./actors-list.component.css']
})
export class ActorsListComponent implements OnInit {
  actors: Actor[] = [];
  totalPages: number = 0;
  page: number = 1;
  logged: boolean = false;

  constructor(private actorService: ActorsService, public dialog: MatDialog, private route: ActivatedRoute,
              private authenticationService: AuthenticationService, private router: Router) {
  }

  ngOnInit(): void {
    this.actorService.getActorsPopular().subscribe(response => {
      this.actors = response.results;
      this.totalPages = response.total_pages;
    });
    this.route.queryParams.subscribe(response => {
      const requestToken = response['request_token'];
      this.logged = response['approved'] == 'true';

      if (this.logged) {
        this.authenticationService.createSession(new NewSessionDto({request_token: requestToken})).subscribe(response => {
          localStorage.setItem('session_id', response.session_id);
          this.router.navigate(['']).then(() => window.location.reload());
        });
      }
    });
  }

  changePage(page: number) {
    this.actorService.getActorsPopular(page.toString()).subscribe(response => {
      this.actors = response.results;
      this.page = response.page;
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
