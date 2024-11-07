import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isDarkTheme = false;
  private lightThemeColor = "#ffffff"; // Color para modo claro
  private darkThemeColor = "#161616";  // Color para modo oscuro

  constructor() {
    // Leer el tema guardado en localStorage
    const savedTheme = localStorage.getItem('dark-theme');
    this.isDarkTheme = savedTheme === 'true';
    document.body.classList.toggle('dark-theme', this.isDarkTheme);
    this.updateThemeColor(); // Configurar el color inicial de la barra
  }

  toggleTheme(): void {
    this.isDarkTheme = !this.isDarkTheme;
    localStorage.setItem('dark-theme', this.isDarkTheme.toString());
    document.body.classList.toggle('dark-theme', this.isDarkTheme);
    this.updateThemeColor(); // Cambiar el color de la barra al cambiar el tema
  }

  get currentTheme(): boolean {
    return this.isDarkTheme;
  }

  private updateThemeColor(): void {
    const metaThemeColor = document.querySelector("meta[name=theme-color]");
    if (metaThemeColor) {
      const color = this.isDarkTheme ? this.darkThemeColor : this.lightThemeColor;
      metaThemeColor.setAttribute("content", color);
    }
  }
}
