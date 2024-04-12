import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { onwer } from 'src/app/models/owner';
import { OwnerService } from 'src/app/services/owner.service';
@Component({
  selector: 'app-add-autor',
  templateUrl: './add-autor.component.html',
  styleUrls: ['./add-autor.component.css'],
})
export class AddAutorComponent implements OnInit {
  onwerForm: FormGroup;

  constructor(
    private router: Router,
    private ownerService: OwnerService,
    private fb: FormBuilder
  ) {
    this.onwerForm = this.fb.group({
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

  ngOnInit(): void {}

  addOnwer() {
    if (this.onwerForm.invalid) {
      swal.fire({
        icon: 'error',
        title: 'los campos son obligatorios',
      });
    } else {
      const onwer: onwer = {
        primerNomb: this.onwerForm.get('primerNomb')?.value,
        segundoNom: this.onwerForm.get('segundoNom')?.value,
        apellidos: this.onwerForm.get('apellidos')?.value,
        direccion: this.onwerForm.get('direccion')?.value,
        telefono: this.onwerForm.get('telefono')?.value,
        ciudad: this.onwerForm.get('ciudad')?.value,
        numCedula: this.onwerForm.get('numCedula')?.value,
        placa: this.onwerForm.get('placa')?.value,
      };
      this.ownerService.postOnwer(onwer).subscribe(
        (data) => {
          swal.fire({
            position: 'center',
            icon: 'success',
            title: 'propietrio agregado correctamente',
            showConfirmButton: false,
            timer: 1500,
          });
          this.router.navigate(['dashboard/onwer']);
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
