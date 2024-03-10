import { Component } from '@angular/core';
import { PhotoExpressService } from '../photo-express.service';
import { EventosModel } from '../eventos.model';

@Component({
  selector: 'app-nuevo-evento',
  templateUrl: './nuevo-evento.component.html',
  styleUrls: ['./nuevo-evento.component.css']
})
export class NuevoEventoComponent {

  idEvento: number = 0;
  nombreInstitucion: string = '';
  direccionInstitucion: string = '';
  numeroAlumnos: number = 0;
  horaInicio: string = '';
  fechaEvento: string = '';
  costoServicio: number = 0;
  servicioTogaBirrete: boolean = false;
  mensajeExito: string = '';

  constructor(private eventoService: PhotoExpressService) { }

  registrarEvento(): void {
    const nuevoEvento: EventosModel = {
      idEvento: this.idEvento,
      nombreInstitucion: this.nombreInstitucion,
      direccionInstitucion: this.direccionInstitucion,
      numeroAlumnos: this.numeroAlumnos,
      horaInicio: this.formatTime(this.horaInicio),
      fechaEvento: this.fechaEvento,
      costoServicio: this.costoServicio,
      servicioTogaBirrete: this.servicioTogaBirrete
    };

    this.eventoService.createEvent(nuevoEvento).subscribe(evento => {
      console.log('Evento registrado exitosamente:', evento);
      this.mensajeExito = 'El evento se ha registrado exitosamente.';
    }, error => {
      console.error('Error al registrar el evento:', error);
    });
  }

  calcularCostoServicio(): void {
    let costoBase = this.numeroAlumnos * 200; // Costo base por alumno
    if (this.servicioTogaBirrete) {
      costoBase += this.numeroAlumnos * 20; // Costo adicional por toga y birrete por alumno
    }
    this.costoServicio = costoBase;
  }

  private formatTime(time: string): string {
    const formattedTime = time + ':00';
    return formattedTime;
  }
}
