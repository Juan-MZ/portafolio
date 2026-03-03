import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-experience-preview',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section id="experiencia" class="exp-section">
      <div class="container">
        <div class="section-header">
          <div class="header-left">
            <h2>Experiencia</h2>
            <p class="subtitle">Mi trayectoria profesional y académica más reciente.</p>
          </div>
          <a routerLink="/experience" class="view-all-btn">
            Ver más
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>

        <div class="timeline">

          <!-- Experiencia laboral -->
          <div class="group-label">
            <div class="group-icon work-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
                stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2"/>
                <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
                <line x1="12" y1="12" x2="12" y2="16"/>
                <line x1="10" y1="14" x2="14" y2="14"/>
              </svg>
            </div>
            <span>Experiencia Laboral</span>
          </div>

          <div class="timeline-track">
            <div class="timeline-dot work-dot"></div>
            <div class="timeline-card">
              <div class="card-top">
                <div>
                  <h3 class="card-title">Desarrollador de Software FullStack</h3>
                  <p class="card-org">Software Mobile Solutions Ltda.</p>
                </div>
                <span class="period-pill">May 2023 – Actualidad</span>
              </div>
              <ul class="card-bullets">
                <li>Desarrollo de Microservicios con Spring Boot.</li>
                <li>Diseño y conexión de Bases de datos con PostgreSQL.</li>
                <li>Desarrollo de Aplicaciones Móviles con Flutter.</li>
              </ul>
            </div>
          </div>

          <!-- Educación reciente -->
          <div class="group-label" style="margin-top: 2rem;">
            <div class="group-icon edu-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
                stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                <path d="M6 12v5c3 3 9 3 12 0v-5"/>
              </svg>
            </div>
            <span>Educación</span>
          </div>

          <div class="edu-cards">
            <div class="edu-item">
              <div class="timeline-dot edu-dot"></div>
              <div class="timeline-card">
                <div class="card-top">
                  <div>
                    <h3 class="card-title">Maestría en Ingeniería de Software</h3>
                    <p class="card-org">Pontificia Universidad Javeriana Cali</p>
                  </div>
                  <span class="status-pill active-pill">En curso</span>
                </div>
              </div>
            </div>
            <div class="edu-item">
              <div class="timeline-dot edu-dot"></div>
              <div class="timeline-card">
                <div class="card-top">
                  <div>
                    <h3 class="card-title">Ingeniería de Sistemas</h3>
                    <p class="card-org">Universidad del Cauca</p>
                  </div>
                  <span class="status-pill done-pill">Graduado</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div class="footer-cta">
          <a routerLink="/experience" class="view-all-btn">
            Ver experiencia completa y certificaciones
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .exp-section {
      padding: 5rem 2rem;
      scroll-margin-top: 65px;
    }

    .container {
      max-width: 900px;
      margin: 0 auto;
    }

    .section-header {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 1rem;
      margin-bottom: 3rem;
      flex-wrap: wrap;
    }

    h2 {
      font-size: 2rem;
      font-weight: 700;
      color: var(--text-primary);
      margin: 0 0 0.4rem 0;
    }

    .subtitle {
      color: var(--text-secondary);
      font-size: 1rem;
      margin: 0;
    }

    .view-all-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.6rem 1.25rem;
      border: 1px solid var(--primary, #60a5fa);
      border-radius: 8px;
      color: var(--primary, #60a5fa);
      font-size: 0.9rem;
      font-weight: 600;
      text-decoration: none;
      transition: all 0.2s ease;
      white-space: nowrap;
    }

    .view-all-btn:hover {
      background: var(--primary, #60a5fa);
      color: #0f172a;
      gap: 0.75rem;
    }

    /* Group labels */
    .group-label {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      margin-bottom: 1rem;
      font-size: 0.85rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: var(--text-secondary);
    }

    .group-icon {
      width: 32px;
      height: 32px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .group-icon svg { width: 16px; height: 16px; }
    .work-icon { background: rgba(96,165,250,0.15); color: #60a5fa; }
    .edu-icon  { background: rgba(167,139,250,0.15); color: #a78bfa; }

    /* Timeline */
    .timeline-track, .edu-item {
      position: relative;
      padding-left: 1.75rem;
      margin-bottom: 1rem;
    }

    .timeline-track::before, .edu-cards::before {
      content: '';
      position: absolute;
      left: 6px;
      top: 0;
      bottom: 0;
      width: 1px;
      background: rgba(255,255,255,0.07);
    }

    .timeline-track { position: relative; }

    .timeline-dot {
      position: absolute;
      left: 0;
      top: 18px;
      width: 13px;
      height: 13px;
      border-radius: 50%;
    }

    .work-dot { background: #60a5fa; box-shadow: 0 0 8px rgba(96,165,250,0.5); }
    .edu-dot  { background: #a78bfa; box-shadow: 0 0 8px rgba(167,139,250,0.4); }

    .timeline-card {
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 14px;
      padding: 1.25rem 1.5rem;
      transition: all 0.2s ease;
    }

    .timeline-card:hover {
      background: rgba(255,255,255,0.05);
      border-color: rgba(255,255,255,0.14);
    }

    .card-top {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .card-title {
      font-size: 1rem;
      font-weight: 600;
      color: var(--text-primary);
      margin: 0 0 0.25rem 0;
    }

    .card-org {
      font-size: 0.85rem;
      color: var(--primary, #60a5fa);
      margin: 0;
      font-weight: 500;
    }

    .period-pill {
      font-size: 0.75rem;
      color: var(--text-secondary);
      background: rgba(255,255,255,0.06);
      border: 1px solid rgba(255,255,255,0.1);
      padding: 0.2rem 0.7rem;
      border-radius: 999px;
      white-space: nowrap;
      flex-shrink: 0;
    }

    .status-pill {
      font-size: 0.72rem;
      font-weight: 600;
      padding: 0.2rem 0.65rem;
      border-radius: 999px;
      white-space: nowrap;
      flex-shrink: 0;
    }

    .active-pill { background: rgba(96,165,250,0.15); color: #60a5fa; border: 1px solid rgba(96,165,250,0.3); }
    .done-pill   { background: rgba(167,139,250,0.15); color: #a78bfa; border: 1px solid rgba(167,139,250,0.3); }

    .card-bullets {
      margin: 0.875rem 0 0 0;
      padding: 0 0 0 1.1rem;
      display: flex;
      flex-direction: column;
      gap: 0.3rem;
    }

    .card-bullets li {
      font-size: 0.875rem;
      color: var(--text-secondary);
      line-height: 1.5;
    }

    .edu-cards {
      position: relative;
      padding-left: 1.75rem;
      display: flex;
      flex-direction: column;
      gap: 0.875rem;
    }

    .footer-cta {
      margin-top: 2.5rem;
      display: flex;
      justify-content: center;
    }

    @media (max-width: 768px) {
      .exp-section {
        padding: 3.5rem 1.25rem;
      }

      h2 {
        font-size: 1.6rem;
      }

      .section-header {
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
        margin-bottom: 2rem;
      }

      .view-all-btn {
        font-size: 0.85rem;
        padding: 0.5rem 1rem;
      }
    }

    @media (max-width: 640px) {
      .exp-section {
        padding: 3rem 1rem;
      }

      .card-top {
        flex-direction: column;
        gap: 0.5rem;
      }

      .timeline-card {
        padding: 1rem 1.1rem;
        border-radius: 12px;
      }

      .card-title {
        font-size: 0.95rem;
      }

      .period-pill,
      .status-pill {
        align-self: flex-start;
      }

      .footer-cta .view-all-btn {
        width: 100%;
        justify-content: center;
      }

      .group-label {
        font-size: 0.78rem;
      }
    }
  `]
})
export class ExperiencePreviewComponent { }
