import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  alertVisible = false;

  // Función para mostrar la alerta con animación
  showAlert() {
    this.alertVisible = true;

    // Usar timeout para agregar la clase 'show' después de un pequeño retraso para permitir que la animación funcione
    setTimeout(() => {
      const alertElement = document.querySelector('.custom-alert');
      if (alertElement) {
        alertElement.classList.add('show');
      }
    }, 10);
  }

  // Función para cerrar la alerta con animación
  closeAlert() {
    const alertElement = document.querySelector('.custom-alert');
    if (alertElement) {
      alertElement.classList.remove('show');

      // Retrasar el cambio de estado de la alerta para permitir que la animación se complete
      setTimeout(() => {
        this.alertVisible = false;
      }, 300); // Duración de la animación (en ms)
    }
  }
}
