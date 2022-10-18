import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {PeopleService} from "../../services/people.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-new-people',
  templateUrl: './new-people.component.html',
  styleUrls: ['./new-people.component.css']
})
export class NewPeopleComponent implements OnInit {
  name: string | null = ''
  height: string | null = ''
  mass: string | null = ''
  hair_color: string | null = ''
  skin_color: string | null = ''
  eye_color: string | null = ''
  birth_year: string | null = ''
  grupo = new FormGroup({
    name: new FormControl(''),
    height: new FormControl(''),
    mass: new FormControl(''),
    hair_color: new FormControl(''),
    skin_color: new FormControl(''),
    eye_color: new FormControl(''),
    birth_year: new FormControl('')
  })

  constructor(private peopleService: PeopleService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  actualizarDatos() {
    this.name = this.grupo.controls.name.value;
    this.height = this.grupo.controls.height.value;
    this.mass = this.grupo.controls.mass.value;
    this.hair_color = this.grupo.controls.hair_color.value;
    this.skin_color = this.grupo.controls.skin_color.value;
    this.eye_color = this.grupo.controls.eye_color.value;
    this.birth_year = this.grupo.controls.birth_year.value;
    this.router.navigate(['/people/'])
  }
}
