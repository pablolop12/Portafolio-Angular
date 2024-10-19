import { Component, HostListener, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']  // Asegúrate de que la propiedad se llama 'styleUrls'
})
export class AppComponent implements OnInit {
  title = 'portafolio';

  constructor(private router: Router) {}

  @HostListener('window:beforeunload', ['$event'])
  unloadHandler(event: Event) {
    localStorage.setItem('scrollPosition', window.scrollY.toString());
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const scrollPosition = localStorage.getItem('scrollPosition');
        if (scrollPosition) {
          window.scrollTo(0, +scrollPosition);
        }
      }
    });
  }
}
