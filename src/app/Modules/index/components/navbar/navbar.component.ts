import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    this.updateNavbar();
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
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
}
