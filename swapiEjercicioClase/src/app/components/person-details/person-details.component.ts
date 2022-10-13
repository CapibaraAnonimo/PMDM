import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit {
  id: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
    });
    console.log(this.id)
  }

}
