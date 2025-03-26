import { Component } from '@angular/core';
import { CardListComponent } from '../shared/card-list/card-list.component';
import { ListFilesDriveComponent } from '../shared/list-files-drive/list-files-drive.component';

@Component({
  selector: 'app-main',
  imports: [ CardListComponent, ListFilesDriveComponent ],
  standalone: true,
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
