import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { Router } from '@angular/router';
import { onwer } from 'src/app/models/owner';
import { DirverService } from 'src/app/services/dirver.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  listDriver : onwer[] = []
  constructor(
    private router :Router,
    private driverServ : DirverService,

  ) { }

  ngOnInit(): void {
    this.getDiver();
  }
  getDiver(){
    this.driverServ.getDriver().subscribe(
      data=>{
        this.listDriver = data.data;
      },error=>{
        swal.fire({
          icon: 'error',
          title: error.error,
        
        })
      }
    )
    
  }



  
  }

