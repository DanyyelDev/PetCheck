import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HistorialMedico } from '../../../types';

@Injectable({
  providedIn: 'root'
})
export class HistorialMedicoService {

  private baseUrl = 'http://localhost:3000/owner-details';

  constructor(private http: HttpClient) {}

  /**
   * Obtiene el historial médico para un dueño específico
   * @param ownerId - ID del dueño de las mascotas
   * @returns Observable con la lista de detalles del historial 
   * 
   */
  getHistorialMedico(ownerId: string): Observable<HistorialMedico[]> {
    const url = `${this.baseUrl}/${ownerId}`;
    return this.http.get<HistorialMedico[]>(url).pipe(
      catchError(this.handleError)
    );
  }

  /**
   * Manejo de errores HTTP
   * @param error - Error HTTP
   * @returns Observable con el error procesado
   */
  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'Ocurrió un error desconocido';
    if (error.error instanceof ErrorEvent) {
      // Error del cliente
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Error del servidor
      errorMessage = `Error del servidor: ${error.status}, Mensaje: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}
