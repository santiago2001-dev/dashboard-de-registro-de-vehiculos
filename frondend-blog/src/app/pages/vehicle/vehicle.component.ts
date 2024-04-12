import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { vehicle } from 'src/app/models/vehicle';
import { VehicleService } from 'src/app/services/vehicle.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  listVehicle : vehicle[] = []
  constructor(
    private router :Router,
    private vehicleService : VehicleService,

  ) { }

  ngOnInit(): void {
    this.getVehicle();
  }
  getVehicle(){
    this.vehicleService.getVehicle().subscribe(
      data=>{
        this.listVehicle = data.data;
      },error=>{
        Swal.fire({
          icon: 'error',
          title: error.error,
        
        })
      }
    )
    
  }




}
