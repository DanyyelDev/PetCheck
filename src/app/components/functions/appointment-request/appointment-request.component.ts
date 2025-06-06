import { Component, OnInit } from '@angular/core';
import { Pet, Veterinarian } from '../../../../types';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { AppointmentService } from '../../../services/functions/appointment-service';


@Component({
  selector: 'app-appointment-request',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
  ],
  templateUrl: './appointment-request.component.html',
  styleUrl: './appointment-request.component.css'
})
export class AppointmentRequestComponent implements OnInit {
  appointmentForm: FormGroup;
  pets: Pet[] = [];
  veterinarians: Veterinarian[] = [];
  availableTimes: string[] = [];

  constructor(private fb: FormBuilder, private appointmentService: AppointmentService) {
    this.appointmentForm = this.fb.group({
      pet: ['', Validators.required],
      veterinarian: ['', Validators.required],
      date: ['', Validators.required],
      reason: ['', Validators.required],
      notes: ['']
    });
  }

  ngOnInit(): void {
    this.loadPets();
    this.loadVeterinarians();
  }

  loadPets(): void {
    this.appointmentService.getPets().subscribe((data) => {
      this.pets = data;
    });
  }

  loadVeterinarians(): void {
    this.appointmentService.getVeterinarians().subscribe((data) => {
      this.veterinarians = data;
    });
  }

  onSubmit(): void {
    if (this.appointmentForm.valid) {
      const appointmentData = {
        date_time: this.appointmentForm.value.date.toISOString(),
        id: this.appointmentService.generateUUID(),
        pet_id: this.appointmentForm.value.pet,
        veterinarian_id: this.appointmentForm.value.veterinarian,
        reason: this.appointmentForm.value.reason,
        status: 'Creada'
      };

      this.appointmentService.createAppointment(appointmentData).subscribe({
        next: (response) => {
          console.log('Respuesta completa:', response);

          if (response.status === 201 || response.status === 200) {
            alert('Cita creada exitosamente.');
          } else {
            alert('Hubo un problema al crear la cita.');
          }
        },
        error: (error) => {
          alert('Error al crear la cita.');
        },
      });

    }
  }
}