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
import { AppointmentService } from '../../../services/functions/appointment-service';

interface AppointmentDisplay {
  appointment_id: string;
  pet_name: string;
  veterinarian_name: string;
  appointment_date_time: Date;
  appointment_status: string;
  appointment_reason: string;
  notes?: string;
}

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
  appointments: AppointmentDisplay[] = [];
  displayedColumns: string[] = ['pet', 'veterinarian', 'appointmentDate', 'status', 'reason', 'notes'];

  // Aquí debes pasar el ownerId válido, puede ser dinámico según tu app
  ownerId = 'some-owner-id';

  constructor(private appointmentService: AppointmentService) {}

  ngOnInit(): void {
    //this.loadAppointments("82020b45-2bbe-4d64-a916-da98960b9644");
    this.loadAppointments("f59a5527-66ed-4228-b00c-6b83697d3499");
    
  }

  private translateStatus(status: string): string {
    const map: { [key: string]: string } = {
      scheduled: 'Confirmada',
      pending: 'Pendiente',
      canceled: 'Cancelada',
      // más traducciones si quieres
    };
    return map[status.toLowerCase()] || status;
  }

  loadAppointments(ownerId: string): void {
    this.appointmentService.getAppointmentsByOwner(ownerId).subscribe({
      next: (data) => {
        this.appointments = data.map(item => ({
          appointment_id: item.appointment_id,
          pet_name: item.pet_name,
          veterinarian_name: item.veterinarian_name,
          appointment_date_time: new Date(item.appointment_date_time),
          appointment_status: this.translateStatus(item.appointment_status),
          appointment_reason: item.appointment_reason,
          notes: item.notes || ''
        }));
      },
      error: (error) => {
        console.error('Error cargando citas:', error);
      }
    });
  }
}