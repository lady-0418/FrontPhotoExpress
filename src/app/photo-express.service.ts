import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EventosModel } from './eventos.model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class PhotoExpressService {
  private apiUrl = 'http://localhost:5197/api/Evento';
  constructor(private http: HttpClient) { }

  // Método para obtener todos los eventos
  getAllEvents(): Observable<EventosModel[]> {
    return this.http.get<EventosModel[]>(this.apiUrl);
  }

  // Método para obtener un evento por su ID
  getEventById(id: number): Observable<EventosModel> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<EventosModel>(url);
  }

  // Método para crear un nuevo evento
  createEvent(event: EventosModel): Observable<EventosModel> {
    return this.http.post<EventosModel>(this.apiUrl, event);
  }

  // Método para actualizar un evento existente
  updateEvent(event: EventosModel): Observable<EventosModel> {
    const url = `${this.apiUrl}/${event.idEvento}`;
    return this.http.put<EventosModel>(url, event);
  }

  // Método para eliminar un evento por su ID
  deleteEvent(id: number): Observable<EventosModel> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<EventosModel>(url);
  }
}
