import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PROJECTS, ProjectCategory } from '../../data/projects.data';

type FilterOption = 'Todos' | ProjectCategory;

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="projects-page">
      <div class="page-hero">
        <div class="container">
          <a routerLink="/" class="back-link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
            Inicio
          </a>
          <h1 class="page-title">Proyectos</h1>
          <p class="page-subtitle">
            Una selección de los proyectos en los que he trabajado
          </p>
          <div class="notice-box">
            <svg class="notice-icon" width="20" height="20" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <line x1="12" y1="8" x2="12" y2="12"/>
              <line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
            <p class="notice-text">
              La mayoría de mis proyectos más importantes son privados, ya que han sido desarrollados
              para clientes. Estos son algunos de mis proyectos públicos.
            </p>
          </div>
          <a href="https://github.com/Juan-MZ?tab=repositories" target="_blank"
            rel="noopener noreferrer" class="github-cta-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            Ver todos mis repositorios en GitHub
          </a>
        </div>
      </div>

      <div class="container">
        <div class="filters">
          @for (filter of filters; track filter) {
            <button
              class="filter-btn"
              [class.active]="activeFilter() === filter"
              (click)="setFilter(filter)">
              {{ filter }}
            </button>
          }
        </div>

        <div class="projects-grid">
          @for (project of filteredProjects(); track project.title) {
            <article class="project-card">
              <div class="card-header">
                <span class="category-badge" [class]="project.category.toLowerCase()">
                  {{ project.category }}
                </span>
                <div class="card-links">
                  @if (project.github) {
                    <a [href]="project.github" target="_blank"
                      rel="noopener noreferrer" class="icon-link"
                      aria-label="Ver código en GitHub">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  }
                  @if (project.link) {
                    <a [href]="project.link" target="_blank"
                      rel="noopener noreferrer" class="icon-link"
                      aria-label="Ver proyecto en vivo">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                  }
                </div>
              </div>

              <div class="card-icon">
                <i [class]="project.image + ' colored'"></i>
              </div>

              <div class="card-body">
                <h3 class="project-title">{{ project.title }}</h3>
                <p class="project-description">{{ project.description }}</p>
              </div>

              <div class="card-footer">
                <div class="project-tags">
                  @for (tag of project.tags; track tag) {
                    <span class="tag">{{ tag }}</span>
                  }
                </div>
              </div>
            </article>
          }
        </div>

        @if (filteredProjects().length === 0) {
          <div class="empty-state">
            <p>No hay proyectos en esta categoría aún.</p>
          </div>
        }
      </div>

      <footer class="footer">
        <div class="container">
          <p>&copy; 2026 Juan José Medicis. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  `,
  styles: [`
    .projects-page {
      min-height: 100vh;
      padding-top: 65px;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    /* ---- Hero ---- */
    .page-hero {
      padding: 4rem 0 3rem;
      border-bottom: 1px solid var(--border-color);
      margin-bottom: 3rem;
    }

    .back-link {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      color: var(--text-secondary);
      text-decoration: none;
      font-size: 0.9375rem;
      font-weight: 500;
      margin-bottom: 1.5rem;
      transition: color 0.3s ease;
    }

    .back-link:hover {
      color: var(--primary);
    }

    .page-title {
      font-size: 3rem;
      font-weight: 800;
      color: var(--text-primary);
      margin: 0 0 0.75rem 0;
      line-height: 1.1;
    }

    .page-subtitle {
      font-size: 1.125rem;
      color: var(--text-secondary);
      margin: 0;
    }

    .notice-box {
      display: flex;
      align-items: flex-start;
      gap: 0.75rem;
      margin-top: 1.5rem;
      padding: 1rem 1.25rem;
      background: rgba(96,165,250,0.07);
      border: 1px solid rgba(96,165,250,0.25);
      border-radius: 12px;
      max-width: 640px;
    }

    .notice-icon {
      color: var(--primary, #60a5fa);
      flex-shrink: 0;
      margin-top: 1px;
    }

    .notice-text {
      font-size: 0.9rem;
      color: var(--text-secondary);
      margin: 0;
      line-height: 1.6;
    }

    .github-cta-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.6rem;
      margin-top: 1.25rem;
      padding: 0.65rem 1.4rem;
      border-radius: 10px;
      background: var(--primary, #60a5fa);
      color: #0f172a;
      font-size: 0.9rem;
      font-weight: 700;
      text-decoration: none;
      transition: opacity 0.2s ease, gap 0.2s ease;
    }

    .github-cta-btn:hover {
      opacity: 0.85;
      gap: 0.85rem;
    }

    /* ---- Filters ---- */
    .filters {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
      margin-bottom: 2.5rem;
    }

    .filter-btn {
      padding: 0.5rem 1.25rem;
      border-radius: 50px;
      border: 2px solid var(--border-color);
      background: transparent;
      color: var(--text-secondary);
      font-size: 0.9375rem;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.25s ease;
      font-family: inherit;
    }

    .filter-btn:hover {
      border-color: var(--primary);
      color: var(--text-primary);
    }

    .filter-btn.active {
      background: var(--primary);
      border-color: var(--primary);
      color: white;
    }

    /* ---- Grid ---- */
    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
      gap: 1.5rem;
      padding-bottom: 5rem;
    }

    /* ---- Card ---- */
    .project-card {
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: 16px;
      padding: 1.75rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      transition: all 0.3s ease;
    }

    .project-card:hover {
      border-color: var(--primary);
      transform: translateY(-4px);
      box-shadow: 0 16px 40px rgba(96, 165, 250, 0.15);
    }

    .card-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .category-badge {
      padding: 0.25rem 0.875rem;
      border-radius: 50px;
      font-size: 0.8125rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .category-badge.backend {
      background: rgba(99, 102, 241, 0.15);
      color: #a5b4fc;
      border: 1px solid rgba(99, 102, 241, 0.3);
    }

    .category-badge.frontend {
      background: rgba(34, 197, 94, 0.15);
      color: #86efac;
      border: 1px solid rgba(34, 197, 94, 0.3);
    }

    .category-badge.fullstack {
      background: rgba(245, 158, 11, 0.15);
      color: #fcd34d;
      border: 1px solid rgba(245, 158, 11, 0.3);
    }

    .card-links {
      display: flex;
      gap: 0.5rem;
    }

    .icon-link {
      width: 36px;
      height: 36px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--text-secondary);
      border-radius: 8px;
      border: 1px solid var(--border-color);
      transition: all 0.25s ease;
      text-decoration: none;
    }

    .icon-link:hover {
      color: var(--primary);
      border-color: var(--primary);
      background: rgba(96, 165, 250, 0.08);
    }

    .card-icon {
      font-size: 3rem;
      line-height: 1;
    }

    .card-body {
      flex: 1;
    }

    .project-title {
      font-size: 1.25rem;
      font-weight: 700;
      color: var(--text-primary);
      margin: 0 0 0.625rem 0;
    }

    .project-description {
      font-size: 0.9375rem;
      line-height: 1.65;
      color: var(--text-secondary);
      margin: 0;
    }

    .card-footer {
      padding-top: 0.75rem;
      border-top: 1px solid var(--border-color);
    }

    .project-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .tag {
      padding: 0.25rem 0.75rem;
      border-radius: 50px;
      font-size: 0.8125rem;
      font-weight: 500;
      background: var(--bg-darker);
      color: var(--text-secondary);
      border: 1px solid var(--border-color);
    }

    /* ---- Empty ---- */
    .empty-state {
      text-align: center;
      padding: 5rem 0;
      color: var(--text-secondary);
      font-size: 1.125rem;
    }

    /* ---- Footer ---- */
    .footer {
      padding: 2rem;
      background: var(--bg-darker);
      color: var(--text-secondary);
      text-align: center;
      border-top: 1px solid var(--border-color);
    }

    .footer p {
      margin: 0;
      opacity: 0.8;
    }

    /* ---- Responsive ---- */
    @media (max-width: 768px) {
      .page-title {
        font-size: 2rem;
      }

      .projects-grid {
        grid-template-columns: 1fr;
      }
    }
  `],
})
export class ProjectsPageComponent {
  readonly filters: FilterOption[] = ['Todos', 'Backend', 'Frontend', 'Fullstack'];
  activeFilter = signal<FilterOption>('Todos');

  filteredProjects = computed(() => {
    const filter = this.activeFilter();
    if (filter === 'Todos') return PROJECTS;
    return PROJECTS.filter((p) => p.category === filter);
  });

  setFilter(filter: FilterOption) {
    this.activeFilter.set(filter);
  }
}
