import { CommonModule, DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MedicalRecord } from '../../../../types';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-medical-record',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
  ],
  providers: [DatePipe],
  templateUrl: './medical-record.component.html',
  styleUrl: './medical-record.component.css'
})
export class MedicalRecordComponent implements OnInit {
  public record: MedicalRecord[] = [
    {
      id: "1",
      pet: {
        id: "1",
        name: "Nombre de la mascota",
        breed: "breed ...."
      },
      veterinarian: {
        id: "1",
        name: "Nombre del veterinario",
        specialty: "Especialidad",
      },
      date: new Date(2025, 4, 12),
      diagnosis: "diagnostico",
      treatment: "tratamiento",
      prescriptions: [
        {
          id: "1",
          medication: "Medicacion ...",
          dosage: "Dosificacion",
          frequency: "Frecuencia",
          startDate: new Date(2025, 4, 12),
          endDate: new Date(2025, 4, 12),
          instructions: "Instrucciones",
          active: true,
        },
        {
          id: "2",
          medication: "Medicacion ...",
          dosage: "Dosificacion",
          frequency: "Frecuencia",
          startDate: new Date(2025, 4, 12),
          endDate: new Date(2025, 4, 12),
          instructions: "Instrucciones",
          active: true,
        }
      ],
      symptoms: [
        "sintoma 1",
        "sintoma 2",
        "sintoma 3"
      ],
      weight: 23,
      notes: "Notas adicionales ....",
      relatedAppointment: {
        id: "1",
        appointmentDate: new Date(2025, 4, 12),
      },
    }
  ];

  constructor(private datePipe: DatePipe) { }

  ngOnInit(): void {
    if (!this.record) {
      console.warn('MedicalRecordComponent: No se proporcionó un registro médico.');
    }
  }

  getGenderIcon(gender: string): string {
    switch (gender.toLowerCase()) {
      case 'male':
      case 'macho':
        return '♂';
      case 'female':
      case 'hembra':
        return '♀';
      default:
        return '?';
    }
  }

  formatDate(date: Date | undefined, formatStr: string = 'PPPppp'): string {
    if (!date) return 'N/A';
    return this.datePipe.transform(date, formatStr, 'es-ES') || 'N/A';
  }
}
