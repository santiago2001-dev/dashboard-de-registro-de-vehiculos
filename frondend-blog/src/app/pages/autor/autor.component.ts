import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { Router } from '@angular/router';
import { OwnerService } from 'src/app/services/owner.service';
import { onwer } from 'src/app/models/owner';

@Component({
  selector: 'app-autor',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.css']
})
export class AutorComponent implements OnInit {
  listOwners : onwer[]= []

  constructor(
    private router :Router,
    private onwerService : OwnerService
  ) { }

  ngOnInit(): void {
    this.getAutors();
  }
    getAutors(){
      this.onwerService.getOnwer().subscribe(
        data=>{
          this.listOwners = data.data
        },error=>{
          swal.fire({
            icon: 'error',
            title: error.error,
          
          })
        
        }
      )
    }

}
