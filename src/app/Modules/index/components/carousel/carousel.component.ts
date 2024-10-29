import { Component, AfterViewInit } from '@angular/core';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements AfterViewInit {
  selectedIndex = 0;

  selectDiv(index: number) {
    if (this.selectedIndex !== index) {
      this.selectedIndex = index;
      setTimeout(() => {
        this.initTooltips();  // Reinicia tooltips después de cambiar de grupo
      }, 0); // Espera mínima para asegurar el DOM está actualizado
    }
  }

  ngAfterViewInit() {
    this.initTooltips();  // Inicializa tooltips al cargar la vista
  }

  initTooltips() {
    // Limpia tooltips anteriores (si existen) y reinicializa
    const tooltipTriggerList = Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.forEach(tooltipTriggerEl => {
      // Limpia cualquier tooltip existente
      const tooltipInstance = bootstrap.Tooltip.getInstance(tooltipTriggerEl);
      if (tooltipInstance) {
        tooltipInstance.dispose();
      }
      // Crea un nuevo tooltip
      new bootstrap.Tooltip(tooltipTriggerEl);
    });
  }
}
