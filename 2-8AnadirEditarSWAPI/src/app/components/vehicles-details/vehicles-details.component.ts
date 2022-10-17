import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vehicle } from 'src/app/interfaces/vehicles.interface';
import { VehiclesService } from 'src/app/services/vehicles.service';

@Component({
  selector: 'app-vehicles-details',
  templateUrl: './vehicles-details.component.html',
  styleUrls: ['./vehicles-details.component.css']
})
export class VehiclesDetailsComponent implements OnInit {

  vehicle: any;
  id: any;

  constructor(private vehicleService: VehiclesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.vehicleService.getVehicleById(Number(this.id)).subscribe(response => {
      this.vehicle = response;
    })
  }

  saveImg(vehicle: Vehicle){
    let nameVehicle = vehicle.url.split("/")[5]
    return `https://starwars-visualguide.com/assets/img/vehicles/${nameVehicle}.jpg`
  }

}
