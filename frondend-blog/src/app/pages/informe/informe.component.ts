import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { reporte } from 'src/app/models/reporte';
import { VehicleService } from 'src/app/services/vehicle.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-informe',
  templateUrl: './informe.component.html',
  styleUrls: ['./informe.component.css']
})
export class InformeComponent implements OnInit {

  report : reporte[]= []

  constructor(
    private router :Router,
    private vehicleService : VehicleService
  ) { }

  ngOnInit(): void {
    this.getReport();
  }
    getReport(){
      this.vehicleService.getReporte().subscribe(
        data=>{
          this.report = data.data
        },error=>{
          Swal.fire({
            icon: 'error',
            title: error.error,
          
          })
        
        }
      )
    }


}
