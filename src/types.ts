export interface DocDrive {
  id: string,
  name: string
}

export enum AppointmentStatus {
  SCHEDULED = 'SCHEDULED',
  CONFIRMED = 'CONFIRMED',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
}

export interface Appointment {
  id: string;
  pet?: string;
  veterinarian?: string;
  appointmentDate: Date;
  status?: string;
  reason?: string;
  notes?: string;
}

export interface Pet {
  id: string;
  name: string;
  breed: string;
}

export interface Veterinarian {
  id: string;
  name: string;
  specialty: string;
  // ... otras propiedades de Veterinarian
}

export interface Prescription {
  id: string;
  medication: string;
  dosage: string;
  frequency: string;
  startDate: Date;
  endDate?: Date;
  instructions: string;
  active: boolean;
}

export interface MedicalRecord {
  id: string;
  pet: Pet;
  veterinarian: Veterinarian;
  date: Date;
  diagnosis: string;
  treatment: string;
  prescriptions: Prescription[];
  symptoms: string[];
  weight: number;
  notes: string;
  relatedAppointment?: Appointment;
}