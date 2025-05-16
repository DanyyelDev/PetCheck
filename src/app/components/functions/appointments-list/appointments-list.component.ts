import { Component } from '@angular/core';
import { Appointment } from '../../../../types';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-appointments-list',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    MatTableModule
  ],
  templateUrl: './appointments-list.component.html',
  styleUrl: './appointments-list.component.css'
})
export class AppointmentsListComponent {
displayedColumns: string[] = ['pet', 'veterinarian', 'appointmentDate', 'status', 'reason', 'notes'];
  appointments: Appointment[] = [
    {
      id: '1',
      pet: 'Buddy',
      veterinarian: 'Dr. Smith',
      appointmentDate: new Date(2025, 4, 12),
      status: 'Confirmada',
      reason: 'Chequeo general',
      notes: 'Asegurarse de revisar la cadera.'
    },
    {
      id: '2',
      pet: 'Max',
      veterinarian: 'Dr. Johnson',
      appointmentDate: new Date(2025, 4, 14),
      status: 'Pendiente',
      reason: 'Vacunación',
      notes: 'Aplicar refuerzo de vacuna.'
    },
    {
      id: '3',
      pet: 'Bella',
      veterinarian: 'Dr. Lee',
      appointmentDate: new Date(2025, 4, 16),
      status: 'Cancelada',
      reason: 'Consulta de seguimiento',
      notes: 'Cancelada por el cliente.'
    },
    {
      id: '4',
      pet: 'Lucy',
      veterinarian: 'Dr. Green',
      appointmentDate: new Date(2025, 4, 20),
      status: 'Confirmada',
      reason: 'Consulta dental',
      notes: 'Revisar dientes y encías.'
    },
    {
      id: '5',
      pet: 'Charlie',
      veterinarian: 'Dr. Brown',
      appointmentDate: new Date(2025, 4, 25),
      status: 'Pendiente',
      reason: 'Revisión post-quirúrgica',
      notes: 'Control de puntos de sutura.'
    }
  ];
}
