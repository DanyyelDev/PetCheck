import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private messages: { message: string; type: string }[] = [];

  addToast(message: string, type: 'success' | 'error' | 'info' | 'warning') {
    this.messages.push({ message, type });
    setTimeout(() => this.removeToast(), 3000); // Elimina después de 3 segundos
  }

  getToasts() {
    return this.messages;
  }

  private removeToast() {
    this.messages.shift(); // Elimina el primer mensaje
  }
}
