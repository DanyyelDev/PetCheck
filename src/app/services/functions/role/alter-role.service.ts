import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map, Observable } from 'rxjs';
import { OwnerBack, User, Veterinarian } from '../../../../types';

@Injectable({
  providedIn: 'root'
})
export class AlterRoleService {

  private apiUrl = 'http://localhost:3000';
  
  constructor(private http: HttpClient) {}

  getOwners(): Observable<User[]> {
    return this.http.get<any[]>(`${this.apiUrl}/owners`).pipe(
      map(owners =>
        owners.map(owner => ({
          ...owner,
          role: 'owner' as const
        }))
      )
    );
  }

  getVeterinarians(): Observable<User[]> {
    return this.http.get<any[]>(`${this.apiUrl}/veterinarians`).pipe(
      map(vets =>
        vets.map(vet => ({
          ...vet,
          role: 'veterinarian' as const
        }))
      )
    );
  }

  getAllUsers(): Observable<User[]> {
    return forkJoin([this.getOwners(), this.getVeterinarians()]).pipe(
      map(([owners, vets]) => [...owners, ...vets])
    );
  }

/*  */

}
