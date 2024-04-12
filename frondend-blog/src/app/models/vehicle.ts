export class vehicle {
  placa: string;
  color: string;
  marca: string;
  tipoVehiculo: string;
  conductor ! : string;
  propietario !: string ;
  
  constructor(
    placa: string, color: string , marca: string, tipoVehiculo: string, conductor: string, propietario: string)
    {
        this.placa = placa;
        this.color = color;
        this.marca = marca;
        this.tipoVehiculo = tipoVehiculo;
        this.conductor = conductor;
        this.propietario = propietario;

    }
}
