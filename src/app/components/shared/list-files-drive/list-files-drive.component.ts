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
 /*  pdfFiles: DocDrive[] = [
    { id: '11aKhwi9hE4YEEdIj1mePnnEH_4RZB9eQ', name: '1. Vista de información' },
    { id: '1hP8W2q6PUtDXIO7uIcK-7fGuhn_VHPey', name: '2. Vista de despliegue' },
    { id: '1oyRsKQWY_cJhCrvdHMQYsRb3heyoa97-', name: '3. Vista de contexto' }
  ]; */
  @Input() pdfFiles: DocDrive[] = [];
  @Input() title: string = "";

  constructor(private sanitizer: DomSanitizer) {}
  
  selectedFileUrl: SafeResourceUrl | null = null;

  viewDocument(fileId: string) {
    const url = `https://drive.google.com/file/d/${fileId}/preview`;
    this.selectedFileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
