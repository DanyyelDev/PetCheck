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
  pet_id: string;
  veterinarian_id: string;
  date_time: Date;
  status: string;
  reason: string;
  notes: string;
}

export interface Pet {
  id: string;
  name: string;
  breed: string;
}

export interface Veterinarian {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  specialization: string;
  available_time_slots: string[];
}

export interface OwnerBack {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  address: string;
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
  showDetails?: boolean;
}

export interface User {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number?: string;
  address?: string;
  specialization?: string;
  available_time_slots?: string[];
  role: 'owner' | 'veterinarian';
}

export interface HistorialMedico {
  owner_id: string;
  owner_name: string;
  pet_id: string;
  pet_name: string;
  breed: string;
  appointment_date: string;
  veterinarian_name: string;
  veterinarian_specialization: string;
  medical_record_date: string;
  pet_weight: number;
  diagnosis: string;
  treatment: string;
  additional_notes: string;
  prescriptions: string[];
  symptoms: string[];
}