import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';
import { AddPostComponent } from './add-post/add-post.component';
import { AutorComponent } from './autor/autor.component';
import { AddAutorComponent } from './add-autor/add-autor.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { InformeComponent } from './informe/informe.component';



@NgModule({
  declarations: [
    PostComponent,
    AddPostComponent,
    AutorComponent,
    AddAutorComponent,
    PagesComponent,
    AddVehicleComponent,
    VehicleComponent,
    InformeComponent,
  
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
  
  ],
  exports:[
    PostComponent,
    AddPostComponent,
    AutorComponent,
    AddAutorComponent,
    PagesComponent,
  ]
})
export class PagesModule { }
