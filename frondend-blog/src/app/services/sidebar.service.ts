import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor() { }
  menu:any[]=[
    {
      
      submenu:[
        {titulo : 'propietarios',url : 'onwer',icono : 'fa fa-users'},
        {titulo : 'conductores',url : 'driver',icono : 'fa-solid fa-truck'},
        {titulo : 'vehiculos',url : 'vehicle',icono : 'fa-solid fa-car'},
      ]
    }
  ]
}
