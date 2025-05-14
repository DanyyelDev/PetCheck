import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VeterinarianService {
  private apiUrl = 'http://tu-backend.com/api/appointments'; // Reemplaza con la URL de tu backend

  constructor(private http: HttpClient) { }

  getAllVeterinarians(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  
}
