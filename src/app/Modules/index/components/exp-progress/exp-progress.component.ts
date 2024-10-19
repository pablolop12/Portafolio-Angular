import { Component, OnInit } from '@angular/core';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-exp-progress',
  templateUrl: './exp-progress.component.html',
  styleUrls: ['./exp-progress.component.scss'] // Corrige el nombre de la propiedad a 'styleUrls'
})
export class ExpProgressComponent implements OnInit {
  title = 'portafolio';

  ngOnInit() {
    this.initializeTooltips();
  }

  initializeTooltips() {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.forEach((tooltipTriggerEl) => {
      new bootstrap.Tooltip(tooltipTriggerEl);
    });
  }
}
