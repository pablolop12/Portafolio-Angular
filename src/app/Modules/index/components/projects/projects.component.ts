import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  toggleDetails(event: Event) {
    const bento = (event.currentTarget as HTMLElement).closest('.bento');
    if (bento) {
      bento.classList.toggle('active');
    }
  }
}
