import { Component } from '@angular/core';
import { CardListComponent } from '../shared/card-list/card-list.component';
import { DocDrive } from '../../../types';

@Component({
  selector: 'app-main',
  imports: [ CardListComponent ],
  standalone: true,
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  
}
