import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { Appointment, Veterinarian } from '../../../types';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private apiUrl = 'http://localhost:3000'; // Reemplaza con la URL de tu backend

  constructor(private http: HttpClient) { }

  // Puedes agregar otros métodos como getAppointmentById, getAllAppointments, etc.
  getPets(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/pets`);
  }

  getVeterinarians(): Observable<Veterinarian[]> {
    return this.http.get<any[]>(`${this.apiUrl}/veterinarians`);
  }

  // appointment-service.ts (añade estos métodos)
  getPetById(petId: string): Observable<{ name: string; last_name: string }> {
    return this.http.get<{ name: string; last_name: string }>(`${this.apiUrl}/pets/${petId}`);
  }

  getVeterinarianById(vetId: string): Observable<{ first_name: string; last_name: string }> {
    return this.http.get<{ first_name: string; last_name: string }>(`${this.apiUrl}/veterinarians/${vetId}`);
  }


  createAppointment(appointment: any): Observable<HttpResponse<any>> {
    return this.http.post<any>(`${this.apiUrl}/appointments`, appointment, {
      observe: 'response',
      headers: { 'Content-Type': 'application/json' },
    });
  }

  getAppointmentsByOwner(ownerId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/appointments/${ownerId}`);
  }


  generateUUID(): string {
    return uuidv4();
  }
}
