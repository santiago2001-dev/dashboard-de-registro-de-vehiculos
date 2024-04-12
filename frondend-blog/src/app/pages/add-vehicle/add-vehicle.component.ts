import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { vehicle } from 'src/app/models/vehicle';
import { VehicleService } from 'src/app/services/vehicle.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css'],
})
export class AddVehicleComponent implements OnInit {
  vehicleForm: FormGroup;
  constructor(
    private router: Router,
    private vehicleService: VehicleService,
    private fb: FormBuilder
  ) {
    this.vehicleForm = this.fb.group({
      placa: ['', Validators.required],
      color: ['', Validators.required],
      marca: ['', Validators.required],
      tipoVehiculo: ['', Validators.required],
      docConductor: ['', Validators.required],
      docPropietario: ['', Validators.required],
    });
  }

  ngOnInit(): void {}
  addVehicle() {
    if (this.vehicleForm.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'los campos son obligatorios',
      });
    } else {
      const vehicles: vehicle = {
        placa: this.vehicleForm.get('placa')?.value,
        color: this.vehicleForm.get('color')?.value,
        marca: this.vehicleForm.get('marca')?.value,
        tipoVehiculo: this.vehicleForm.get('tipoVehiculo')?.value,
        conductor: this.vehicleForm.get('docConductor')?.value,
        propietario: this.vehicleForm.get('docPropietario')?.value,
      };
      this.vehicleService.postVehicle(vehicles).subscribe(
        (data) => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'vehiculo agregado correctamente',
            showConfirmButton: false,
            timer: 1500,
          });
          this.router.navigate(['dashboard/vehicle']);
        },
        (error) => {
          Swal.fire({
            icon: 'error',
            title: error.error,
          });
        }
      );
    }
  }
}
