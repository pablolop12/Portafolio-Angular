declare var bootstrap: any;

import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    const copyEmailBtn = document.getElementById('copyEmailBtnContact');
    if (copyEmailBtn) {
      const tooltip = new bootstrap.Tooltip(copyEmailBtn, {
        title: '¡Copiado!',
        trigger: 'manual',
        placement: 'right'
      });

      copyEmailBtn.addEventListener('click', () => {
        const email = 'pablolopezlujan01@gmail.com';
        navigator.clipboard.writeText(email).then(() => {
          // Muestra el tooltip al hacer clic
          tooltip.show();
          setTimeout(() => {
            tooltip.hide(); // Oculta el tooltip después de 2 segundos
          }, 2000);
        }).catch(err => {
          console.error('Error al copiar el correo al portapapeles: ', err);
        });
      });
    }
  }
}
