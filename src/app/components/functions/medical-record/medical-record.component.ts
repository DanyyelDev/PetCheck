import { CommonModule, DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { HistorialMedico, MedicalRecord } from '../../../../types';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { HistorialMedicoService } from '../../../services/functions/historial-medico.service';

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
  public records: (HistorialMedico & { showDetails: boolean })[] = [];
  public loading: boolean = false;
  public error: string | null = null;

  constructor(
    private historialMedicoService: HistorialMedicoService,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.fetchHistorialMedico('f59a5527-66ed-4228-b00c-6b83697d3499');
    //this.fetchHistorialMedico('82020b45-2bbe-4d64-a916-da98960b9644');
  }

  fetchHistorialMedico(ownerId: string): void {
    this.loading = true;
    this.error = null;

    this.historialMedicoService.getHistorialMedico(ownerId).subscribe({
      next: (data) => {
        this.records = data.map((record) => ({
          ...record,
          showDetails: false,
        }));
        this.loading = false;
      },
      error: (err) => {
        console.error('Error fetching historial médico:', err);
        this.error = 'No se pudieron cargar los registros médicos.';
        this.loading = false;
      },
    });
  }

  formatDate(date: string, formatStr: string = 'dd/MM/yyyy'): string {
    if (!date) return 'N/A';
    return this.datePipe.transform(date, formatStr, 'es-ES') || 'N/A';
  }
}
