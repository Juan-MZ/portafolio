import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="sobre-mi" class="hero">
      <div class="hero-content">

        <div class="intro">
          <div class="intro-text">
            <p class="greeting">Hola,<span class="name"> soy Juan José</span></p>
            <p class="role"><span class="typed-text">{{ displayedRole() }}</span><span class="cursor" [class.blink]="cursorBlink()">|</span></p>
            <p class="tagline">Apasionado por crear experiencias digitales excepcionales</p>
            <p class="tagline">
              Entiendo la tecnología como una herramienta para hacer la vida más sencilla y divertida, por eso cuido la calidad de mi código tanto como la colaboración y la comunicación dentro del equipo.
            </p>
            <div class="social-links">
              <a href="https://www.linkedin.com/in/juanjosemedicis/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                LinkedIn
              </a>
              <a href="https://github.com/Juan-MZ" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
              <a href="mailto:juanjosemedicis@gmail.com" aria-label="Email">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                juanjosemedicis&#64;gmail.com
              </a>
            </div>
          </div>
          <div class="intro-image">
            <img src="/assets/profile.jpg" alt="Juan José Medicis" class="profile-img">
          </div>
        </div>

      </div>

      <div class="scroll-indicator">
        <span class="scroll-label">Experiencia</span>
        <div class="scroll-arrow">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      display: flex;
      flex-direction: column;
      padding: 65px 2rem 5rem;
      background: transparent;
      scroll-margin-top: 65px;
    }

    .scroll-indicator {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.35rem;
      padding-top: 2.5rem;
      padding-bottom: 0.5rem;
      opacity: 0.55;
      transition: opacity 0.2s ease;
      cursor: default;
    }

    .scroll-indicator:hover {
      opacity: 0.9;
    }

    .scroll-label {
      font-size: 0.75rem;
      font-weight: 600;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--text-secondary);
    }

    .scroll-arrow {
      color: var(--primary, #60a5fa);
      animation: bounce-down 1.6s ease-in-out infinite;
    }

    @keyframes bounce-down {
      0%, 100% { transform: translateY(0); }
      50%       { transform: translateY(5px); }
    }

    .hero-content {
      max-width: 1200px;
      margin: 0 auto;
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 5rem;
    }

    /* ——— INTRO ——— */
    .intro {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 3rem;
      min-height: calc(100vh - 10rem);
    }

    .intro-text {
      flex: 1;
      max-width: 600px;
    }

    .greeting {
      font-size: 1.5rem;
      color: var(--text-secondary);
      margin: 0 0 0.25rem 0;
    }

    .name {
      font-size: 1.5rem;
      font-weight: 600;
      color: #49c5ff;
      margin: 0 0 0.5rem 0;
      line-height: 1.1;
    }

    .role {
      font-size: 1.5rem;
      margin: 0 0 1.25rem 0;
      font-weight: 600;
    }

    .typed-text {
      background: linear-gradient(135deg, #49c5ff 0%, #c6d7ff 30%, #ffffff 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .cursor {
      display: inline-block;
      color: #49c5ff;
      font-weight: 300;
      margin-left: 2px;
    }

    .cursor.blink {
      animation: blink 1s step-end infinite;
    }

    @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }

    .tagline {
      font-size: 1.125rem;
      color: var(--text-secondary);
      line-height: 1.7;
      margin: 0 0 2rem 0;
    }

    .social-links {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
    }

    .social-links a {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem 1rem;
      border: 1px solid var(--border-color);
      border-radius: 8px;
      color: var(--text-secondary);
      text-decoration: none;
      font-size: 0.875rem;
      font-weight: 500;
      transition: all 0.2s ease;
    }

    .social-links a:hover {
      border-color: var(--primary);
      color: var(--primary);
      background: rgba(96, 165, 250, 0.05);
    }

    .intro-image {
      flex-shrink: 0;
    }

    .profile-img {
      width: 260px;
      height: 260px;
      border-radius: 50%;
      object-fit: cover;
      border: 3px solid var(--border-color);
      transition: all 0.3s ease;
      display: block;
    }

    .profile-img:hover {
      border-color: var(--primary);
      box-shadow: 0 10px 30px rgba(96, 165, 250, 0.3);
    }

    @media (max-width: 900px) {
      .intro {
        flex-direction: column-reverse;
        min-height: auto;
        padding-top: 2rem;
        gap: 2rem;
      }

      .profile-img {
        width: 180px;
        height: 180px;
      }
    }

    @media (max-width: 768px) {
      .hero {
        padding: 4rem 1.5rem;
      }

      .social-links a span {
        display: none;
      }
    }
  `],
})
export class HeroComponent implements OnInit, OnDestroy {
  readonly fullRole = 'Ingeniero de Sistemas';
  displayedRole = signal('');
  cursorBlink = signal(false);

  private typeInterval: ReturnType<typeof setInterval> | null = null;

  ngOnInit() {
    let index = 0;
    const typeSpeed = 80;

    this.typeInterval = setInterval(() => {
      if (index < this.fullRole.length) {
        this.displayedRole.set(this.fullRole.slice(0, index + 1));
        index++;
      } else {
        clearInterval(this.typeInterval!);
        this.cursorBlink.set(true);
      }
    }, typeSpeed);
  }

  ngOnDestroy() {
    if (this.typeInterval) clearInterval(this.typeInterval);
  }
}
