import { Component, OnInit } from '@angular/core';
import { User } from '../../../../types';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlterRoleService } from '../../../services/functions/role/alter-role.service';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { UserSessionService } from '../../../services/functions/role/user-session.service';

@Component({
  selector: 'app-alter-roles',
  imports: [CommonModule, FormsModule, NgIf, NgFor],
  templateUrl: './alter-roles.component.html',
  styleUrl: './alter-roles.component.css'
})
export class AlterRolesComponent implements OnInit {
users: User[] = []; // Lista de usuarios obtenida del servicio
  selectedUser: User | null = null; // Usuario seleccionado de la lista

  constructor(
    private alterRoleService: AlterRoleService,
    private userSessionService: UserSessionService
  ) {}

  ngOnInit(): void {
    this.loadUsers();
    this.loadCurrentSessionUser();
  }

  loadUsers(): void {
    this.alterRoleService.getAllUsers().subscribe({
      next: (data: User[]) => {
        this.users = data;
      },
      error: (err) => console.error('Error cargando usuarios:', err)
    });
  }

  loadCurrentSessionUser(): void {
    this.selectedUser = this.userSessionService.getCurrentUser();
  }

  selectUser(user: User): void {
    this.selectedUser = user;
  }

  changeSessionUser(): void {
    if (this.selectedUser) {
      this.userSessionService.setUser(this.selectedUser);
      alert(`Usuario en sesión cambiado a: ${this.selectedUser.first_name} ${this.selectedUser.last_name}`);
    }
  }
}