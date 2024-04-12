import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { PostComponent } from './post/post.component';
import { AddPostComponent } from './add-post/add-post.component';
import { AddAutorComponent } from './add-autor/add-autor.component';
import { AutorComponent } from './autor/autor.component';
import { LoginGuard } from '../guards/login.guard';
import { InformeComponent } from './informe/informe.component';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { VehicleComponent } from './vehicle/vehicle.component';

const routes : Routes =[
  {path :'dashboard',component: PagesComponent,
  children:[
    {path:'driver',component:PostComponent},
    {path:'add-driver',component:AddPostComponent},

    {path:'informe',component:InformeComponent},
    {path:'add-vehicle',component:AddVehicleComponent},
    {path:'vehicle',component:VehicleComponent},

    {path:'add-onwer',component:AddAutorComponent},
    {path:'onwer',component:AutorComponent},


  ]},
  
  
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class PagesRoutingModule { }
