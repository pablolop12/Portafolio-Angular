import { Component, HostListener, OnInit } from '@angular/core';
import { ThemeService } from '../../../../services/theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  currentSection: string = '';

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.updateNavbar();
    this.onWindowScroll();
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const sections = document.querySelectorAll('app-profile, app-skills, app-experience, app-projects, app-about, app-contact');
    let currentSection = '';
    const offset = window.innerHeight / 3;  // Adjust the offset value as needed
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
  }
}
