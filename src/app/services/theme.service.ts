import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isDarkTheme = false;

  constructor() {
    // Leer el tema guardado en localStorage
    const savedTheme = localStorage.getItem('dark-theme');
    this.isDarkTheme = savedTheme === 'true';
    document.body.classList.toggle('dark-theme', this.isDarkTheme);
  }

  toggleTheme(): void {
    this.isDarkTheme = !this.isDarkTheme;
    localStorage.setItem('light-theme', this.isDarkTheme.toString());
    document.body.classList.toggle('light-theme', this.isDarkTheme);
  }

  get currentTheme(): boolean {
    return this.isDarkTheme;
  }
}
