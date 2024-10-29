import { Component, HostListener, OnInit } from '@angular/core';
import { ThemeService } from '../../../../services/theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  currentSection: string = '';
  isDarkTheme: boolean = true; // Por defecto, el tema oscuro (luna) está activado
  isMenuCollapsed: boolean = true;  // Variable para controlar el estado del menú

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.updateNavbar();
    this.onWindowScroll();
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const sections = document.querySelectorAll('app-profile, app-skills, app-experience, app-projects, app-about, app-contact');
    let currentSection = '';
    const offset = window.innerHeight / 3;
    sections.forEach((section: any) => {
      const rect = section.getBoundingClientRect();
      if (rect.top + offset < window.innerHeight && rect.bottom - offset > 0) {
        currentSection = section.id;
      }
    });
    this.currentSection = currentSection;
    this.updateNavbar();
  }

  @HostListener('window:resize', [])
  onWindowResize(): void {
    this.updateNavbar();
  }

  private updateNavbar(): void {
    const navbar = document.querySelector('.navbar');
    const scrollPosition = window.scrollY;
    const isSmallScreen = window.innerWidth <= 768;

    if (!isSmallScreen && scrollPosition === 0) {
      navbar?.classList.add('navbar-transparent');
      navbar?.classList.remove('navbar-black');
    } else {
      navbar?.classList.add('navbar-black');
      navbar?.classList.remove('navbar-transparent');
    }
  }

  toggleTheme() {
    this.themeService.toggleTheme();
    this.isDarkTheme = !this.isDarkTheme;
  }

  // Método para alternar el estado del menú
  toggleMenu() {
    this.isMenuCollapsed = !this.isMenuCollapsed;

    const navbarToggler = document.querySelector('.navbar-toggler');
    if (this.isMenuCollapsed) {
      navbarToggler?.classList.add('collapsed');
    } else {
      navbarToggler?.classList.remove('collapsed');
    }
  }

  // Desplaza la vista a la sección especificada
  scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
      // Calcula la posición del desplazamiento con un offset
      const offset = 80; // Ajusta este valor para establecer el espacio extra deseado
      const sectionPosition = section.getBoundingClientRect().top + window.scrollY - offset;
  
      // Desplazamiento suave con offset
      window.scrollTo({
        top: sectionPosition,
        behavior: 'smooth'
      });
  
      // Cierra el menú en pantallas pequeñas después de hacer clic
      this.isMenuCollapsed = true;
    }
  }
  

  
}
