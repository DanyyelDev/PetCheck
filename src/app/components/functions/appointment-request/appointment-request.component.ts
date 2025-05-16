import { Component, OnInit } from '@angular/core';
import { Appointment, AppointmentStatus, Pet, Veterinarian } from '../../../../types';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';


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
  appointmentForm: FormGroup = new FormGroup({});
  availableTimes: string[] = []; // Asegúrate de que esta lista se llena correctamente.
  pets = [{ name: 'Fido' }, { name: 'Whiskers' }];
  veterinarians = [{ name: 'Dr. Smith' }, { name: 'Dr. Doe' }];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.appointmentForm = this.fb.group({
      pet: ['', Validators.required],
      veterinarian: ['', Validators.required],
      date: ['', Validators.required], // Aquí defines el control 'date'.
      time: ['', Validators.required],
      reason: ['', Validators.required],
      notes: ['']
    });
  }

  onSubmit(): void {
    if (this.appointmentForm.valid) {
      console.log(this.appointmentForm.value);
    }
  }

  onDateChange(event: any): void {
    // Actualiza `availableTimes` según la fecha seleccionada
    this.availableTimes = ['10:00 AM', '11:00 AM', '3:00 PM']; // Ejemplo
  }
}
