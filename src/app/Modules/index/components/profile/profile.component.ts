declare var bootstrap: any;

import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    const typingElement = document.querySelector('.typing') as HTMLElement;
    const text = '¡Hola! soy...';
    let index = 0;

    function typeWriter() {
      if (typingElement) {
        if (index < text.length) {
          typingElement.textContent += text.charAt(index);
          index++;
          setTimeout(typeWriter, 140);
        } else {
          setTimeout(() => {
            eraseText();
          }, 10000); // Espera 10 segundos antes de borrar
        }
      }
    }

    function eraseText() {
      if (typingElement) {
        if (index >= 0) {
          typingElement.textContent = typingElement.textContent!.slice(0, index);
          index--;
          setTimeout(eraseText, 100);
        } else {
          setTimeout(() => {
            index = 0;
            typeWriter();
          }, 1000); // Espera 1 segundo antes de volver a escribir
        }
      }
    }

    setTimeout(typeWriter, 500); // Retrasa la animación al cargar la página

    // Código para copiar al portapapeles y mostrar el tooltip
    const copyEmailBtn = document.getElementById('copyEmailBtn');
    if (copyEmailBtn) {
      copyEmailBtn.addEventListener('click', () => {
        const email = 'pablolopezlujan01@gmail.com';
        navigator.clipboard.writeText(email).then(() => {
          const tooltip = new bootstrap.Tooltip(copyEmailBtn, {
            title: '¡Copiado!',
            trigger: 'manual',
            placement: 'right'
          });
          tooltip.show();
          setTimeout(() => {
            tooltip.hide();
          }, 2000); // Desvanece el tooltip después de 2 segundos
        }).catch(err => {
          console.error('Error al copiar el correo al portapapeles: ', err);
        });
      });
    }
  }
}
