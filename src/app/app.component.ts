import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToastService } from './services/toast/toast.service';


@Component({
  selector: 'app-root',
  imports: [ 
    RouterOutlet
   ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EducaJovenesAngular';

  constructor(public toastService: ToastService) {}

  // Métodos para mostrar notificaciones
  showSuccess() {
    this.toastService.addToast('Operación exitosa', 'success');
  }

  showError() {
    this.toastService.addToast('Ocurrió un error', 'error');
  }

  showInfo() {
    this.toastService.addToast('Mensaje informativo', 'info');
  }

  showWarning() {
    this.toastService.addToast('Advertencia', 'warning'); 
  } 
}
