import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LangService } from '../../services/lang.service';

interface ExperienceItem {
  type: 'work' | 'education' | 'certification';
  title: string;
  organization: string;
  period: string;
  description?: string[];
  badge?: string;
  url?: string;
  en?: {
    title?: string;
    organization?: string;
    period?: string;
    description?: string[];
    badge?: string;
  };
}

const EXPERIENCE_ITEMS: ExperienceItem[] = [
  // Experiencia laboral
  {
    type: 'work',
    title: 'Desarrollador de Software FullStack',
    organization: 'Software Mobile Solutions Ltda.',
    period: 'Mayo 2023 – Actualidad',
    description: [
      'Mantenimiento de código y aplicación de buenas prácticas de desarrollo.',
      'Diseño y conexión de Bases de datos con PostgreSQL.',
      'Desarrollo de Microservicios con Spring Boot.',
      'Desarrollo de Aplicaciones Móviles con Flutter.',
    ],
    en: {
      title: 'FullStack Software Developer',
      period: 'May 2023 – Present',
      description: [
        'Code maintenance and application of software development best practices.',
        'Database design and connection with PostgreSQL.',
        'Microservices development with Spring Boot.',
        'Mobile Application development with Flutter.',
      ],
    },
  },
];

const EDUCATION_ITEMS: ExperienceItem[] = [
  {
    type: 'education',
    title: 'Maestría en Ingeniería de Software',
    organization: 'Pontificia Universidad Javeriana Cali',
    period: 'En proceso · Esperado Jul 2027',
    badge: 'En curso',
    en: {
      title: "Master's in Software Engineering",
      period: 'In progress · Expected Jul 2027',
      badge: 'In progress',
    },
  },
  {
    type: 'education',
    title: 'Diplomado en Arquitectura de Software',
    organization: 'Universidad de La Sabana',
    period: 'Jun 2025',
    badge: 'Completado',
    en: {
      title: 'Diploma in Software Architecture',
      badge: 'Completed',
    },
  },
  {
    type: 'education',
    title: 'Aptitud Ocupacional — Inglés C1',
    organization: 'Cambridge Language Centres, Popayán',
    period: 'Feb 2025',
    badge: 'Completado',
    en: {
      title: 'Occupational Aptitude — English C1',
      badge: 'Completed',
    },
  },
  {
    type: 'education',
    title: 'Ingeniería de Sistemas',
    organization: 'Universidad del Cauca',
    period: '2018 – Ene 2025',
    badge: 'Graduado',
    en: {
      title: 'Systems Engineering',
      period: '2018 – Jan 2025',
      badge: 'Graduate',
    },
  },
];

const CERT_ITEMS: ExperienceItem[] = [
  {
    type: 'certification',
    title: 'Scrum Fundamentals Certified (SFC)',
    organization: 'SCRUMstudy',
    period: 'May 2024',
  },
  {
    type: 'certification',
    title: 'Introduction to Transformer-Based NLP',
    organization: 'NVIDIA Deep Learning Institute',
    period: '2024',
  },
  {
    type: 'certification',
    title: 'Getting Started with Deep Learning',
    organization: 'NVIDIA Deep Learning Institute',
    period: 'Feb 2023',
  },
  {
    type: 'certification',
    title: 'Programación y Desarrollo de Software',
    organization: 'Certificación académica',
    period: 'Jun 2023',
    en: {
      title: 'Programming and Software Development',
      organization: 'Academic Certification',
    },
  },
  {
    type: 'certification',
    title: 'Desarrollo Web con PHP',
    organization: 'Certificación académica',
    period: '2023',
    en: {
      title: 'Web Development with PHP',
      organization: 'Academic Certification',
    },
  },
];

@Component({
  selector: 'app-experience-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="page-wrapper">
      <!-- Header -->
      <header class="page-header">
        <div class="container">
          <a routerLink="/" class="back-link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M19 12H5M12 5l-7 7 7 7"/>
            </svg>
            {{ t().experiencePage.backLink }}
          </a>
          <div class="header-content">
            <h1>{{ t().experiencePage.title }}</h1>
            <p class="header-subtitle">{{ t().experiencePage.subtitle }}</p>
          </div>
        </div>
      </header>

      <main class="container main-content">

        <!-- Experiencia Laboral -->
        <section class="timeline-section">
          <div class="section-label">
            <div class="label-icon work-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
                stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2"/>
                <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
                <line x1="12" y1="12" x2="12" y2="16"/>
                <line x1="10" y1="14" x2="14" y2="14"/>
              </svg>
            </div>
            <h2>{{ t().experiencePage.workSection }}</h2>
          </div>

          <div class="timeline">
            <div *ngFor="let item of experience" class="timeline-item">
              <div class="timeline-dot work-dot"></div>
              <div class="timeline-card">
                <div class="card-header">
                  <div>
                    <h3 class="item-title">{{ getTitle(item) }}</h3>
                    <p class="item-org">{{ getOrg(item) }}</p>
                  </div>
                  <span class="period-badge">{{ getPeriod(item) }}</span>
                </div>
                <ul *ngIf="item.description" class="item-desc">
                  <li *ngFor="let desc of getDescription(item)">{{ desc }}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <!-- Educación -->
        <section class="timeline-section">
          <div class="section-label">
            <div class="label-icon edu-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
                stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                <path d="M6 12v5c3 3 9 3 12 0v-5"/>
              </svg>
            </div>
            <h2>{{ t().experiencePage.eduSection }}</h2>
          </div>

          <div class="timeline">
            <div *ngFor="let item of education" class="timeline-item">
              <div class="timeline-dot edu-dot"></div>
              <div class="timeline-card">
                <div class="card-header">
                  <div>
                    <h3 class="item-title">{{ getTitle(item) }}</h3>
                    <p class="item-org">{{ getOrg(item) }}</p>
                  </div>
                  <div class="badges-group">
                    <span class="period-badge">{{ getPeriod(item) }}</span>
                    <span *ngIf="item.badge" [class]="'status-badge ' + getBadgeClass(item)">
                      {{ getBadge(item) }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Certificaciones -->
        <section class="certs-section">
          <div class="section-label">
            <div class="label-icon cert-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
                stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="8" r="6"/>
                <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
              </svg>
            </div>
            <h2>{{ t().experiencePage.certSection }}</h2>
          </div>

          <div class="certs-grid">
            <div *ngFor="let cert of certifications" class="cert-card">
              <div class="cert-icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
                  stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="8" r="6"/>
                  <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
                </svg>
              </div>
              <div class="cert-info">
                <h3 class="cert-title">{{ getTitle(cert) }}</h3>
                <p class="cert-org">{{ getOrg(cert) }}</p>
              </div>
              <span class="cert-period">{{ cert.period }}</span>
            </div>
          </div>
        </section>

      </main>
    </div>
  `,
  styles: [`
    .page-wrapper {
      min-height: 100vh;
      padding-top: 80px;
    }

    .container {
      max-width: 900px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    /* Header */
    .page-header {
      padding: 3rem 0 2rem;
      border-bottom: 1px solid rgba(255,255,255,0.06);
      margin-bottom: 4rem;
    }

    .back-link {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      color: var(--primary, #60a5fa);
      text-decoration: none;
      font-size: 0.9rem;
      font-weight: 500;
      margin-bottom: 2rem;
      transition: gap 0.2s ease;
    }

    .back-link:hover { gap: 0.75rem; }

    .header-content h1 {
      font-size: 2.5rem;
      font-weight: 700;
      color: var(--text-primary);
      margin: 0 0 0.75rem 0;
    }

    .header-subtitle {
      color: var(--text-secondary);
      font-size: 1.1rem;
      margin: 0;
    }

    /* Section headers */
    .main-content {
      padding-bottom: 6rem;
      display: flex;
      flex-direction: column;
      gap: 5rem;
    }

    .section-label {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 2rem;
    }

    .label-icon {
      width: 44px;
      height: 44px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .label-icon svg { width: 22px; height: 22px; }

    .work-icon  { background: rgba(96,  165, 250, 0.15); color: #60a5fa; }
    .edu-icon   { background: rgba(167, 139, 250, 0.15); color: #a78bfa; }
    .cert-icon  { background: rgba(251, 191,  36, 0.15); color: #fbbf24; }

    .section-label h2 {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--text-primary);
      margin: 0;
    }

    /* Timeline */
    .timeline {
      position: relative;
      padding-left: 2rem;
    }

    .timeline::before {
      content: '';
      position: absolute;
      left: 7px;
      top: 0;
      bottom: 0;
      width: 1px;
      background: rgba(255,255,255,0.08);
    }

    .timeline-item {
      position: relative;
      margin-bottom: 1.5rem;
    }

    .timeline-item:last-child { margin-bottom: 0; }

    .timeline-dot {
      position: absolute;
      left: -29px;
      top: 18px;
      width: 14px;
      height: 14px;
      border-radius: 50%;
      border: 2px solid;
    }

    .work-dot { background: #60a5fa; border-color: #60a5fa; box-shadow: 0 0 8px rgba(96,165,250,0.5); }
    .edu-dot  { background: #a78bfa; border-color: #a78bfa; box-shadow: 0 0 8px rgba(167,139,250,0.5); }

    .timeline-card {
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 14px;
      padding: 1.5rem;
      transition: border-color 0.2s, background 0.2s;
    }

    .timeline-card:hover {
      background: rgba(255,255,255,0.05);
      border-color: rgba(255,255,255,0.15);
    }

    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .item-title {
      font-size: 1.1rem;
      font-weight: 600;
      color: var(--text-primary);
      margin: 0 0 0.25rem 0;
    }

    .item-org {
      font-size: 0.9rem;
      color: var(--primary, #60a5fa);
      margin: 0;
      font-weight: 500;
    }

    .badges-group {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 0.4rem;
    }

    .period-badge {
      font-size: 0.78rem;
      color: var(--text-secondary);
      background: rgba(255,255,255,0.06);
      border: 1px solid rgba(255,255,255,0.1);
      padding: 0.25rem 0.75rem;
      border-radius: 999px;
      white-space: nowrap;
    }

    .status-badge {
      font-size: 0.72rem;
      font-weight: 600;
      padding: 0.2rem 0.65rem;
      border-radius: 999px;
      white-space: nowrap;
    }

    .badge-active   { background: rgba(96,165,250,0.15); color: #60a5fa; border: 1px solid rgba(96,165,250,0.3); }
    .badge-done     { background: rgba(34,197,94,0.12);  color: #4ade80; border: 1px solid rgba(34,197,94,0.3); }
    .badge-graduate { background: rgba(167,139,250,0.15); color: #a78bfa; border: 1px solid rgba(167,139,250,0.3); }

    .item-desc {
      margin: 1rem 0 0 0;
      padding: 0 0 0 1.25rem;
      display: flex;
      flex-direction: column;
      gap: 0.35rem;
    }

    .item-desc li {
      font-size: 0.9rem;
      color: var(--text-secondary);
      line-height: 1.5;
    }

    /* Certifications grid */
    .certs-grid {
      display: flex;
      flex-direction: column;
      gap: 0.875rem;
    }

    .cert-card {
      display: flex;
      align-items: center;
      gap: 1rem;
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 12px;
      padding: 1rem 1.25rem;
      transition: all 0.2s ease;
    }

    .cert-card:hover {
      background: rgba(255,255,255,0.05);
      border-color: rgba(251,191,36,0.25);
    }

    .cert-icon-wrap {
      width: 38px;
      height: 38px;
      border-radius: 10px;
      background: rgba(251,191,36,0.12);
      color: #fbbf24;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .cert-icon-wrap svg { width: 20px; height: 20px; }

    .cert-info { flex: 1; }

    .cert-title {
      font-size: 0.95rem;
      font-weight: 600;
      color: var(--text-primary);
      margin: 0 0 0.2rem 0;
    }

    .cert-org {
      font-size: 0.8rem;
      color: var(--text-secondary);
      margin: 0;
    }

    .cert-period {
      font-size: 0.75rem;
      color: var(--text-secondary);
      background: rgba(255,255,255,0.06);
      border: 1px solid rgba(255,255,255,0.1);
      padding: 0.2rem 0.65rem;
      border-radius: 999px;
      white-space: nowrap;
    }

    @media (max-width: 640px) {
      .header-content h1 { font-size: 1.9rem; }
      .card-header { flex-direction: column; }
      .badges-group { align-items: flex-start; flex-direction: row; flex-wrap: wrap; }
      .cert-card { flex-wrap: wrap; }
      .cert-period { margin-top: 0.25rem; }
    }
  `]
})
export class ExperiencePageComponent {
  private langService = inject(LangService);
  readonly t = this.langService.t;
  readonly experience = EXPERIENCE_ITEMS;
  readonly education = EDUCATION_ITEMS;
  readonly certifications = CERT_ITEMS;

  private get isEn(): boolean {
    return this.langService.lang() === 'en';
  }

  getTitle(item: ExperienceItem): string {
    return (this.isEn && item.en?.title) ? item.en.title : item.title;
  }

  getOrg(item: ExperienceItem): string {
    return (this.isEn && item.en?.organization) ? item.en.organization : item.organization;
  }

  getPeriod(item: ExperienceItem): string {
    return (this.isEn && item.en?.period) ? item.en.period : item.period;
  }

  getBadge(item: ExperienceItem): string {
    return (this.isEn && item.en?.badge) ? item.en.badge : (item.badge ?? '');
  }

  getDescription(item: ExperienceItem): string[] {
    return (this.isEn && item.en?.description) ? item.en.description : (item.description ?? []);
  }

  getBadgeClass(item: ExperienceItem): string {
    const badge = this.getBadge(item);
    if (['En curso', 'In progress'].includes(badge)) return 'badge-active';
    if (['Graduado', 'Graduate'].includes(badge)) return 'badge-graduate';
    return 'badge-done';
  }
}
