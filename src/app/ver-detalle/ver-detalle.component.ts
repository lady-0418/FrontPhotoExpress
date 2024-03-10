import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotoExpressService } from '../photo-express.service'; 
import { EventosModel } from '../eventos.model';

@Component({
  selector: 'app-ver-detalle',
  templateUrl: './ver-detalle.component.html',
  styleUrls: ['./ver-detalle.component.css']
})
export class VerDetalleComponent implements OnInit {

  constructor(private route: ActivatedRoute, private eventoService: PhotoExpressService) { }

  evento: EventosModel | null = null; // Aquí se declara la instancia de EventosModel
  editando: boolean = false;
  alerta: { tipo: string, mensaje: string } | null = null;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id']; // Convertir el parámetro de la URL a número
      this.obtenerEvento(id);
    });
  }

  obtenerEvento(id: number): void {
    this.eventoService.getEventById(id).subscribe(evento => {
      this.evento = evento; // Asignar el valor del evento a la instancia de EventosModel
    });
  }

  habilitarEdicion(): void {
    this.editando = !this.editando;
  }

  guardarCambios(): void {
    if (this.evento) {
      this.eventoService.updateEvent(this.evento).subscribe(
        () => {
          // Mostrar mensaje de éxito
          this.alerta = { tipo: 'success', mensaje: 'Cambios guardados correctamente' };
          // Volver a bloquear los campos y cambiar el estado del botón
          this.editando = false;
          setTimeout(() => this.alerta = null, 2000); // Ocultar la alerta después de 2 segundos
        },
        error => {
          console.error('Error al guardar los cambios:', error);
          // Mostrar mensaje de error
          this.alerta = { tipo: 'danger', mensaje: 'Error al guardar los cambios' };
        }
      );
    }
  }
}

