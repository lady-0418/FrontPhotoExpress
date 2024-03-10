import { Component, OnInit } from '@angular/core';
import { EventosModel } from '../eventos.model';
import { PhotoExpressService } from '../photo-express.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  eventos: EventosModel[] = [];
  alerta: { tipo: string, mensaje: string } | null = null;

  constructor(private eventoService: PhotoExpressService) { }

  ngOnInit(): void {
    this.getAllEventos();
  }

  getAllEventos(): void {
    this.eventoService.getAllEvents()
      .subscribe(eventos => this.eventos = eventos);
  }

  eliminarEvento(id: number): void {
    this.eventoService.deleteEvent(id)
      .subscribe(() => {
        // Eliminar el evento de la lista
        this.eventos = this.eventos.filter(evento => evento.idEvento !== id);
        // Mostrar mensaje de éxito
        this.alerta = { tipo: 'success', mensaje: 'Evento eliminado correctamente' };
        // Ocultar la alerta después de 2 segundos
        setTimeout(() => this.alerta = null, 2000);
      }, error => {
        console.error('Error al eliminar el evento:', error);
        // Mostrar mensaje de error
        this.alerta = { tipo: 'danger', mensaje: 'Error al eliminar el evento' };
      });
  }
}
