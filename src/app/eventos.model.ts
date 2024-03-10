export class EventosModel {
  idEvento: number;
  nombreInstitucion: string;
  direccionInstitucion: string;
  numeroAlumnos: number;
  horaInicio: string; // Deberías considerar cómo manejar este campo (como un string o un objeto Date)
  fechaEvento: string; // Deberías considerar cómo manejar este campo (como un string o un objeto Date)
  costoServicio: number;
  servicioTogaBirrete: boolean;

  constructor(
    idEvento: number,
    nombreInstitucion: string,
    direccionInstitucion: string,
    numeroAlumnos: number,
    horaInicio: string,
    fechaEvento: string,
    costoServicio: number,
    servicioTogaBirrete: boolean
  ) {
    this.idEvento = idEvento;
    this.nombreInstitucion = nombreInstitucion;
    this.direccionInstitucion = direccionInstitucion;
    this.numeroAlumnos = numeroAlumnos;
    this.horaInicio = horaInicio;
    this.fechaEvento = fechaEvento;
    this.costoServicio = costoServicio;
    this.servicioTogaBirrete = servicioTogaBirrete;
  }
}
