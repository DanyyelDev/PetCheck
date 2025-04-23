import { Component } from '@angular/core';
import { CardListComponent } from '../shared/card-list/card-list.component';
import { ListFilesDriveComponent } from '../shared/list-files-drive/list-files-drive.component';
import { DocDrive } from '../../../types';

@Component({
  selector: 'app-main',
  imports: [ CardListComponent, ListFilesDriveComponent ],
  standalone: true,
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  title = "Mis Documentos";
  driveFiles: DocDrive[] = [
    { id: '11aKhwi9hE4YEEdIj1mePnnEH_4RZB9eQ', name: '1. Vista de información' },
    { id: '1hP8W2q6PUtDXIO7uIcK-7fGuhn_VHPey', name: '2. Vista de despliegue' },
    { id: '1oyRsKQWY_cJhCrvdHMQYsRb3heyoa97-', name: '3. Vista de contexto' }
  ];
}
