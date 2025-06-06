import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { OwnerBack, User, Veterinarian } from '../../../../types';

@Injectable({
  providedIn: 'root'
})
export class UserSessionService {

  private userSubject = new BehaviorSubject<User | null>(null);
  currentUser$ = this.userSubject.asObservable();
  private currentRoleKey = 'currentRole';
  private roleDataKey = 'roleData';

  setUser(user: User): void {
    this.userSubject.next(user);
    /* this.saveRole(user.role, user) */
  }

  getCurrentUser(): User | null {
    return this.userSubject.getValue();
  }

  
  /* Manejo de roles */
/* 
  saveRole(role: string, data: Veterinarian | OwnerBack): void {
    localStorage.setItem(this.currentRoleKey, role);
    localStorage.setItem(this.roleDataKey, JSON.stringify(data));
  }

  getCurrentRole(): string | null {
    return localStorage.getItem(this.currentRoleKey);
  }

  getRoleData(): Veterinarian | OwnerBack | null {
    const data = localStorage.getItem(this.roleDataKey);
    return data ? JSON.parse(data) : null;
  }

  switchRole(role: string, data: Veterinarian | OwnerBack): void {
    this.saveRole(role, data);
  } */
}
