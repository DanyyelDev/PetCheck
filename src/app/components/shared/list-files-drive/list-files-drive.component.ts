import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { DocDrive } from '../../../../types';

@Component({
  selector: 'app-list-files-drive',
  imports: [ 
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatListModule
  ],
  templateUrl: './list-files-drive.component.html',
  styleUrl: './list-files-drive.component.css'
})
export class ListFilesDriveComponent {
  @Input() pdfFiles: DocDrive[] = [];
  @Input() title: string = "";

  constructor(private sanitizer: DomSanitizer) {}
  
  selectedFileUrl: SafeResourceUrl | null = null;
  selectedFileId: string | null = null; // Nueva propiedad para rastrear el ID del archivo seleccionado

  viewDocument(fileId: string) {
    this.selectedFileId = fileId; // Guarda el ID del archivo que se está visualizando
    const url = `https://drive.google.com/file/d/${fileId}/preview`;
    this.selectedFileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  minimizeDocument() {
    this.selectedFileUrl = null;
    this.selectedFileId = null; // Limpia el ID del archivo seleccionado al minimizar
  }
}
