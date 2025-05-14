import { Component } from '@angular/core';
import { Appointment, AppointmentStatus, Pet, Veterinarian } from '../../../../types';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AppointmentService } from '../../../services/functions/appointment-service';
import { Router } from '@angular/router';
import { PetService } from '../../../services/functions/pet.service';
import { VeterinarianService } from '../../../services/functions/veterinarian.service';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';


@Component({
  selector: 'app-appointment-request',
  imports: [ 
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatFormFieldModule, 
  ],
  templateUrl: './appointment-request.component.html',
  styleUrl: './appointment-request.component.css'
})
export class AppointmentRequestComponent {
  appointmentForm: FormGroup;
  pets: Pet[] = [
    { id: 'pet-1', name: 'Pelusa', breed: 'Persa' },
    { id: 'pet-2', name: 'Max', breed: 'Labrador' },
    // Agrega más mascotas estáticas si lo deseas
  ];
  veterinarians: Veterinarian[] = [
    { id: 'vet-1', name: 'Dra. Ana Pérez', specialty: 'Medicina General' },
    { id: 'vet-2', name: 'Dr. Carlos López', specialty: 'Cirugía' },
    // Agrega más veterinarios estáticos si lo deseas
  ];
  appointmentStatusOptions = Object.values(AppointmentStatus);

  constructor(
    private fb: FormBuilder,
    /* private petService: PetService,
    private veterinarianService: VeterinarianService,
    private appointmentService: AppointmentService, */
    private router: Router // Inyecta el Router
  ) {
    this.appointmentForm = this.fb.group({
      pet: [null, Validators.required],
      veterinarian: [null, Validators.required],
      dateTime: [null, Validators.required],
      reason: ['', Validators.required],
      notes: ['']
    });
  }

  ngOnInit(): void {
    this.loadPets();
    this.loadVeterinarians();
  }

  loadPets(): void {
    /* this.petService.getAllPets().subscribe(
      (pets) => {
        this.pets = pets;
      },
      (error) => {
        console.error('Error loading pets:', error);
      }
    ); */
  }

  loadVeterinarians(): void {
    /* this.veterinarianService.getAllVeterinarians().subscribe(
      (veterinarians) => {
        this.veterinarians = veterinarians;
      },
      (error) => {
        console.error('Error loading veterinarians:', error);
      }
    ); */
  }

  onSubmit(): void {
    if (this.appointmentForm.valid) {
      const appointmentData: Appointment = {
        id: null!, // El backend lo generará
        pet: this.appointmentForm.get('pet')!.value,
        veterinarian: this.appointmentForm.get('veterinarian')!.value,
        appointmentDate: new Date(this.appointmentForm.get('dateTime')!.value),
        status: AppointmentStatus.SCHEDULED, // Por defecto al crear
        reason: this.appointmentForm.get('reason')!.value,
        notes: this.appointmentForm.get('notes')!.value
      };

      /* this.appointmentService.createAppointment(appointmentData).subscribe(
        (response) => {
          console.log('Appointment created successfully:', response);
          // Aquí podrías redirigir al usuario o mostrar un mensaje de éxito
          this.router.navigate(['/appointments']); // Ejemplo de redirección
        },
        (error) => {
          console.error('Error creating appointment:', error);
          // Aquí podrías mostrar un mensaje de error al usuario
        }
      ); */
    }
  }
}
