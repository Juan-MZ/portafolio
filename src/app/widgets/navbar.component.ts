import { Component, HostListener, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LangService } from '../services/lang.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <nav class="navbar" [class.scrolled]="isScrolled()">
      <div class="nav-container">
        <a routerLink="/" class="logo">JM</a>

        <button class="mobile-toggle" (click)="toggleMobileMenu()" aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul class="nav-links" [class.active]="mobileMenuOpen()">
          <li><a [routerLink]="['/']" fragment="sobre-mi" (click)="closeMobileMenu()">{{ t().nav.aboutMe }}</a></li>
          <li><a [routerLink]="['/']" fragment="experiencia" (click)="closeMobileMenu()">{{ t().nav.experience }}</a></li>
          <li><a [routerLink]="['/']" fragment="habilidades" (click)="closeMobileMenu()">{{ t().nav.skills }}</a></li>
          <li>
            <a routerLink="/projects" routerLinkActive="active-link"
              (click)="closeMobileMenu()">{{ t().nav.projects }}</a>
          </li>
          <li><a [routerLink]="['/']" fragment="contacto" (click)="closeMobileMenu()">{{ t().nav.contact }}</a></li>
        </ul>

        <div class="nav-socials">
          <a href="https://github.com/Juan-MZ" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/juanjosemedicis/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          <button class="lang-btn" (click)="langService.toggle()" [attr.aria-label]="lang() === 'es' ? 'Switch to English' : 'Cambiar a español'">
            {{ lang() === 'es' ? 'EN' : 'ES' }}
          </button>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      background: rgba(15, 23, 42, 0.9);
      backdrop-filter: blur(10px);
      transition: all 0.3s ease;
      border-bottom: 1px solid rgba(51, 65, 85, 0.5);
    }

    .navbar.scrolled {
      box-shadow: 0 2px 20px rgba(0, 0, 0, 0.5);
      border-bottom-color: var(--border-color);
      background: rgba(15, 23, 42, 0.95);
    }

    .nav-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 1rem 2rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 2rem;
    }

    .logo {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--text-primary);
      text-decoration: none;
      transition: color 0.3s ease;
    }

    .logo:hover {
      color: var(--primary);
    }

    .nav-links {
      display: flex;
      list-style: none;
      gap: 2rem;
      margin: 0;
      padding: 0;
      flex: 1;
      justify-content: center;
    }

    .nav-links li {
      margin: 0;
    }

    .nav-links a {
      color: var(--text-secondary);
      text-decoration: none;
      font-weight: 500;
      font-size: 0.9375rem;
      transition: color 0.3s ease;
      position: relative;
    }

    .nav-links a::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 0;
      height: 2px;
      background: var(--primary);
      transition: width 0.3s ease;
    }

    .nav-links a:hover,
    .nav-links a.active-link {
      color: var(--text-primary);
    }

    .nav-links a:hover::after,
    .nav-links a.active-link::after {
      width: 100%;
    }

    .nav-socials {
      display: flex;
      gap: 1rem;
    }

    .nav-socials a {
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--text-secondary);
      border-radius: 8px;
      transition: all 0.3s ease;
    }

    .nav-socials a:hover {
      color: var(--primary);
      background: var(--bg-card);
    }

    .lang-btn {
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--text-secondary);
      border-radius: 8px;
      background: none;
      border: 1px solid var(--border-color);
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.05em;
      cursor: pointer;
      transition: all 0.3s ease;
      font-family: inherit;
    }

    .lang-btn:hover {
      color: var(--primary);
      border-color: var(--primary);
      background: var(--bg-card);
    }

    .mobile-toggle {
      display: none;
      flex-direction: column;
      gap: 4px;
      background: none;
      border: none;
      padding: 8px;
      cursor: pointer;
    }

    .mobile-toggle span {
      width: 24px;
      height: 2px;
      background: var(--text-primary);
      transition: all 0.3s ease;
    }

    @media (max-width: 768px) {
      .nav-container {
        padding: 1rem;
      }

      .mobile-toggle {
        display: flex;
      }

      .nav-links {
        position: fixed;
        top: 65px;
        left: 0;
        right: 0;
        background: var(--bg-dark);
        flex-direction: column;
        padding: 2rem;
        gap: 1.5rem;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
        transform: translateY(-100%);
        opacity: 0;
        pointer-events: none;
        transition: all 0.3s ease;
        border-bottom: 1px solid var(--border-color);
      }

      .nav-links.active {
        transform: translateY(0);
        opacity: 1;
        pointer-events: all;
      }

      .nav-links a::after {
        display: none;
      }

      .nav-socials a {
        display: none;
      }
    }
  `]
})
export class NavbarComponent {
  readonly langService = inject(LangService);
  readonly lang = this.langService.lang;
  readonly t = this.langService.t;
  isScrolled = signal(false);
  mobileMenuOpen = signal(false);

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 20);
  }

  toggleMobileMenu() {
    this.mobileMenuOpen.set(!this.mobileMenuOpen());
  }

  closeMobileMenu() {
    this.mobileMenuOpen.set(false);
  }
}
