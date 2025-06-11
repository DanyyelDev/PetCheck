import { Component } from '@angular/core';
import { DocDrive } from '../../../../types';
import { CommonModule } from '@angular/common';
import { ListFilesDriveComponent } from '../../shared/list-files-drive/list-files-drive.component';

@Component({
  selector: 'app-postmorten',
  imports: [ CommonModule, ListFilesDriveComponent ],
  templateUrl: './postmorten.component.html',
  styleUrl: './postmorten.component.css'
})
export class PostmortenComponent {
  title = "Postmortem"
  driveFiles: DocDrive[] = [
    { id: '1iW_QT8seukHIMfq3p20UgonFp9R_jqp6', name: '1. Documento ' },
    { id: '1oyRsKQWY_cJhCrvdHMQYsRb3heyoa97-', name: '2. Presentación' },
  ];
}
