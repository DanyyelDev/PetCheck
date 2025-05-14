import { CommonModule, DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MedicalRecord } from '../../../../types';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

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
    MatIconModule
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
      name: "Buddy",
      breed: "Golden Retriever",
    },
    veterinarian: {
      id: "1",
      name: "Dr. Smith",
      specialty: "Orthopedics",
    },
    date: new Date(2025, 4, 12),
    diagnosis: "Hip dysplasia",
    treatment: "Physical therapy",
    prescriptions: [
      {
        id: "1",
        medication: "Pain Reliever",
        dosage: "50mg",
        frequency: "Once daily",
        startDate: new Date(2025, 4, 12),
        endDate: new Date(2025, 5, 12),
        instructions: "Administer after meals",
        active: true,
      },
    ],
    symptoms: ["Limping", "Stiffness"],
    weight: 35,
    notes: "Monitor for improvement in gait",
    relatedAppointment: {
      id: "1",
      appointmentDate: new Date(2025, 5, 12),
    },
    showDetails: false,
  },
  {
    id: "2",
    pet: {
      id: "2",
      name: "Mittens",
      breed: "Tabby Cat",
    },
    veterinarian: {
      id: "2",
      name: "Dr. Lee",
      specialty: "Dermatology",
    },
    date: new Date(2025, 4, 15),
    diagnosis: "Flea Allergy Dermatitis",
    treatment: "Topical ointments",
    prescriptions: [
      {
        id: "2",
        medication: "Antihistamine",
        dosage: "10mg",
        frequency: "Twice daily",
        startDate: new Date(2025, 4, 15),
        endDate: new Date(2025, 4, 25),
        instructions: "Apply directly to affected area",
        active: true,
      },
    ],
    symptoms: ["Itching", "Redness", "Hair loss"],
    weight: 4,
    notes: "Recheck in 10 days",
    relatedAppointment: {
      id: "2",
      appointmentDate: new Date(2025, 4, 25),
    },
    showDetails: false,
  },
  {
    id: "3",
    pet: {
      id: "3",
      name: "Charlie",
      breed: "Beagle",
    },
    veterinarian: {
      id: "3",
      name: "Dr. Patel",
      specialty: "Cardiology",
    },
    date: new Date(2025, 4, 18),
    diagnosis: "Heart murmur",
    treatment: "Medication",
    prescriptions: [
      {
        id: "3",
        medication: "Beta-blocker",
        dosage: "25mg",
        frequency: "Once daily",
        startDate: new Date(2025, 4, 18),
        endDate: new Date(2025, 5, 18),
        instructions: "Administer in the morning",
        active: true,
      },
    ],
    symptoms: ["Fatigue", "Coughing"],
    weight: 18,
    notes: "Schedule echocardiogram",
    relatedAppointment: {
      id: "3",
      appointmentDate: new Date(2025, 5, 18),
    },
    showDetails: false,
  },
  {
    id: "4",
    pet: {
      id: "4",
      name: "Luna",
      breed: "Siberian Husky",
    },
    veterinarian: {
      id: "4",
      name: "Dr. Garcia",
      specialty: "Neurology",
    },
    date: new Date(2025, 4, 20),
    diagnosis: "Seizures",
    treatment: "Anticonvulsant therapy",
    prescriptions: [
      {
        id: "4",
        medication: "Phenobarbital",
        dosage: "2mg/kg",
        frequency: "Twice daily",
        startDate: new Date(2025, 4, 20),
        endDate: new Date(2025, 5, 20),
        instructions: "Do not skip doses",
        active: true,
      },
    ],
    symptoms: ["Tremors", "Loss of balance"],
    weight: 28,
    notes: "Monitor seizure activity",
    relatedAppointment: {
      id: "4",
      appointmentDate: new Date(2025, 5, 20),
    },
    showDetails: false,
  },
  {
    id: "5",
    pet: {
      id: "5",
      name: "Max",
      breed: "Dachshund",
    },
    veterinarian: {
      id: "5",
      name: "Dr. Kim",
      specialty: "General Practice",
    },
    date: new Date(2025, 4, 25),
    diagnosis: "Obesity",
    treatment: "Weight management plan",
    prescriptions: [],
    symptoms: ["Weight gain", "Lethargy"],
    weight: 12,
    notes: "Recommend diet adjustment",
    relatedAppointment: {
      id: "5",
      appointmentDate: new Date(2025, 6, 1),
    },
    showDetails: false,
  },
  // Add 5 more objects here following the same structure
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
