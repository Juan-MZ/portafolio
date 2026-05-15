import { Component, signal, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './widgets/navbar.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NavbarComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Portafolio - Juan José Medicis');

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent): void {
    document.documentElement.style.setProperty('--gx', `${e.clientX}px`);
    document.documentElement.style.setProperty('--gy', `${e.clientY}px`);
  }

  @HostListener('document:touchmove', ['$event'])
  onTouchMove(e: TouchEvent): void {
    const t = e.touches[0];
    document.documentElement.style.setProperty('--gx', `${t.clientX}px`);
    document.documentElement.style.setProperty('--gy', `${t.clientY}px`);
  }
}
