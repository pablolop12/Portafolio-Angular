import { Component, HostListener, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portafolio';

  constructor(private router: Router, public themeService: ThemeService) {} // Inyecta ThemeService

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

    // Establece el color inicial de la barra superior según el tema al cargar la aplicación
    this.themeService.toggleTheme(); // Opcional: si deseas que al cargar se establezca según el tema guardado
  }

  // Método para alternar el tema
  toggleTheme() {
    this.themeService.toggleTheme(); // Llama al método de ThemeService para alternar el tema y el color de la barra
  }
}
