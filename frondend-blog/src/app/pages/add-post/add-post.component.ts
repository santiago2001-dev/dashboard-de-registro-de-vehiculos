import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators,FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';
import { DirverService } from 'src/app/services/dirver.service';
import { onwer } from 'src/app/models/owner';
@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  driverForm: FormGroup;
  constructor(
    private router: Router,
    private driverService: DirverService,
    private fb: FormBuilder
    
  ) { 
    this.driverForm = this.fb.group({
      primerNomb: ['', Validators.required],
      segundoNom: ['', Validators.required],
      apellidos: ['', Validators.required],
      direccion: ['', Validators.required],
      telefono: ['', Validators.required],
      ciudad: ['', Validators.required],
      numCedula: ['', Validators.required],
      placa: ['', Validators.required],
    });
  }

  ngOnInit(): void {
   
  }


  addDriver() {
    if (this.driverForm.invalid) {
      swal.fire({
        icon: 'error',
        title: 'los campos son obligatorios',
      });
    } else {
      const driver: onwer = {
        primerNomb: this.driverForm.get('primerNomb')?.value,
        segundoNom: this.driverForm.get('segundoNom')?.value,
        apellidos: this.driverForm.get('apellidos')?.value,
        direccion: this.driverForm.get('direccion')?.value,
        telefono: this.driverForm.get('telefono')?.value,
        ciudad: this.driverForm.get('ciudad')?.value,
        numCedula: this.driverForm.get('numCedula')?.value,
        placa: this.driverForm.get('placa')?.value,
      };
      this.driverService.postDriver(driver).subscribe(
        (data) => {
          swal.fire({
            position: 'center',
            icon: 'success',
            title: 'conductor agregado correctamente',
            showConfirmButton: false,
            timer: 1500,
          });
          this.router.navigate(['dashboard/driver']);
        },
        (error) => {
          swal.fire({
            icon: 'error',
            title: error.error,
          });
        }
      );
    }
  }

}
