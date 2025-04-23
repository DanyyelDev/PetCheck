import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DocDrive } from '../../../../types';
import { ListFilesDriveComponent } from '../../shared/list-files-drive/list-files-drive.component';

@Component({
  selector: 'app-iniciales',
  imports: [ CommonModule, ListFilesDriveComponent ],
  templateUrl: './iniciales.component.html',
  styleUrl: './iniciales.component.css'
})
export class InicialesComponent {
  title = "Scripts"
  driveFiles: DocDrive[] = [
    { id: '11aKhwi9hE4YEEdIj1mePnnEH_4RZB9eQ', name: '1. Vista de información' },
    { id: '1hP8W2q6PUtDXIO7uIcK-7fGuhn_VHPey', name: '2. Vista de despliegue' },
    { id: '1oyRsKQWY_cJhCrvdHMQYsRb3heyoa97-', name: '3. Vista de contexto' }
  ];
}
