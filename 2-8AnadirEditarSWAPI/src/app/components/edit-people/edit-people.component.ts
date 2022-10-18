import {Component, OnInit} from '@angular/core';
import {PeopleService} from "../../services/people.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-edit-people',
  templateUrl: './edit-people.component.html',
  styleUrls: ['./edit-people.component.css']
})
export class EditPeopleComponent implements OnInit {
  person: any;
  grupo = new FormGroup({
    name: new FormControl(''),
    height: new FormControl(''),
    mass: new FormControl(''),
    hair_color: new FormControl(''),
    skin_color: new FormControl(''),
    eye_color: new FormControl(''),
    birth_year: new FormControl('')
  })
  id: any;

  constructor(private peopleService: PeopleService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.peopleService.getPersonById(Number(this.id)).subscribe(response => {
      this.person = response;
      this.grupo.patchValue({name: this.person.name});
      this.grupo.patchValue({height: this.person.height});
      this.grupo.patchValue({mass: this.person.mass});
      this.grupo.patchValue({hair_color: this.person.hair_color});
      this.grupo.patchValue({skin_color: this.person.skin_color});
      this.grupo.patchValue({eye_color: this.person.eye_color});
      this.grupo.patchValue({birth_year: this.person.birth_year});
    })
  }

  actualizarDatos() {
    this.person.name = this.grupo.controls.name.value;
    this.person.height = this.grupo.controls.height.value;
    this.person.mass = this.grupo.controls.mass.value;
    this.person.hair_color = this.grupo.controls.hair_color.value;
    this.person.skin_color = this.grupo.controls.skin_color.value;
    this.person.eye_color = this.grupo.controls.eye_color.value;
    this.person.birth_year = this.grupo.controls.birth_year.value;
    this.router.navigate(['/people/', this.id])
  }
}
