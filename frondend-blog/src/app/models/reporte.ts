export class reporte {
  placa: string;
  marca: string;
  NombreConductor: string;
  NombrePropietario: string;
  constructor(
    placa: string,
    marca: string,
    nombreConductor: string,
    nombrePropietario: string
  ) {
    this.placa = placa;
    this.marca = marca;
    this.NombreConductor = nombreConductor;
    this.NombrePropietario = nombrePropietario;
  }
}
