import {Component, Inject, OnInit} from '@angular/core';
import {ActorsListComponent} from "../actors-list/actors-list.component";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ActorsService} from "../../services/actors.service";
import {ActorDetailsResponse} from "../../interfaces/actors.interface";

@Component({
  selector: 'app-actors-dialog',
  templateUrl: './actors-dialog.component.html',
  styleUrls: ['./actors-dialog.component.css']
})
export class ActorsDialogComponent implements OnInit {
  actorDetail!: ActorDetailsResponse;
  timeDiff: any;
  age: any;


  constructor(private actorService: ActorsService, public dialogRef: MatDialogRef<ActorsListComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit(): void {
    this.actorService.getActorDetails(this.data.actor).subscribe(response => {
      this.actorDetail = response;
      this.timeDiff = Math.abs(Date.now() - new Date(response.birthday).getTime());
      this.age = Math.floor((this.timeDiff / (1000 * 3600 * 24))/365);
    })
  }

}
