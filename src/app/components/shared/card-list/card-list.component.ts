import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-card-list',
  imports: [ CommonModule ],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css'
})
export class CardListComponent {
  @ViewChild('cardContainer') cardContainer!: ElementRef;

  categories = [
    { name: 'Plantillas', author: '...........' },
    { name: 'Actas', author: '...........' },
    { name: 'Asignaciones', author: '...........' },
    { name: 'Log de errores', author: '...........' },
    { name: 'Informes', author: '...........' },
    /* { name: 'Blockchain', author: 'CryptoMaster' } */
  ];  

  ngAfterViewInit() {
    const slider = this.cardContainer.nativeElement;

    // Función para desplazar el contenedor
    const scrollAmount = 250; // Cantidad de píxeles a desplazar
    const scrollLeft = () => slider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    const scrollRight = () => slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });

    // Agregar eventos a los botones
    document.getElementById('leftBtn')?.addEventListener('click', scrollLeft);
    document.getElementById('rightBtn')?.addEventListener('click', scrollRight);
  }
}
