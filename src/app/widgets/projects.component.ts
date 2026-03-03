import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PROJECTS } from '../data/projects.data';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section id="proyectos" class="projects">
      <div class="container">
        <div class="section-header">
          <span class="section-label">Mi Trabajo</span>
          <h2 class="section-title">Proyectos Destacados</h2>
          <p class="section-description">
            Algunos de los proyectos en los que he trabajado
          </p>
        </div>

        <div class="projects-grid">
          @for (project of featuredProjects; track project.title) {
            <article class="project-card">
              <div class="card-header">
                <span class="category-badge" [class]="project.category.toLowerCase()">
                  {{ project.category }}
                </span>
                @if (project.github) {
                  <a [href]="project.github" target="_blank"
                    rel="noopener noreferrer" class="icon-link"
                    aria-label="Ver código">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                }
              </div>

              <div class="card-icon">
                <i [class]="project.image + ' colored'"></i>
              </div>

              <h3 class="project-title">{{ project.title }}</h3>
              <p class="project-description">{{ project.description }}</p>

              <div class="project-tags">
                @for (tag of project.tags; track tag) {
                  <span class="tag">{{ tag }}</span>
                }
              </div>
            </article>
          }
        </div>

        <div class="view-all">
          <a routerLink="/projects" class="btn-all">
            Ver todos los proyectos
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .projects {
      padding: 5rem 2rem;
      background: transparent;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .section-header {
      text-align: center;
      margin-bottom: 4rem;
    }

    .section-label {
      display: inline-block;
      padding: 0.5rem 1.5rem;
      background: var(--primary);
      color: white;
      border-radius: 50px;
      font-size: 0.875rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 1rem;
    }

    .section-title {
      font-size: 2.5rem;
      font-weight: 700;
      color: var(--text-primary);
      margin: 0 0 1rem 0;
    }

    .section-description {
      font-size: 1.125rem;
      color: var(--text-secondary);
      max-width: 600px;
      margin: 0 auto;
    }

    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
      gap: 1.5rem;
      margin-bottom: 3rem;
    }

    .project-card {
      background: var(--bg-card);
      border-radius: 16px;
      padding: 1.75rem;
      border: 1px solid var(--border-color);
      display: flex;
      flex-direction: column;
      gap: 0.875rem;
      transition: all 0.3s ease;
    }

    .project-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 16px 40px rgba(96, 165, 250, 0.15);
      border-color: var(--primary);
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

    .icon-link {
      width: 34px;
      height: 34px;
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
    }

    .card-icon {
      font-size: 2.75rem;
      line-height: 1;
    }

    .project-title {
      font-size: 1.25rem;
      font-weight: 700;
      color: var(--text-primary);
      margin: 0;
    }

    .project-description {
      font-size: 0.9375rem;
      line-height: 1.65;
      color: var(--text-secondary);
      margin: 0;
      flex: 1;
    }

    .project-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      padding-top: 0.5rem;
      border-top: 1px solid var(--border-color);
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

    /* ---- Ver todos ---- */
    .view-all {
      text-align: center;
    }

    .btn-all {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.875rem 2rem;
      background: transparent;
      color: var(--primary);
      border: 2px solid var(--primary);
      border-radius: 8px;
      font-size: 1rem;
      font-weight: 600;
      text-decoration: none;
      transition: all 0.3s ease;
    }

    .btn-all:hover {
      background: var(--primary);
      color: white;
      transform: translateY(-2px);
      box-shadow: 0 10px 20px rgba(96, 165, 250, 0.3);
    }

    @media (max-width: 768px) {
      .projects {
        padding: 4rem 1.5rem;
      }

      .section-title {
        font-size: 2rem;
      }

      .projects-grid {
        grid-template-columns: 1fr;
      }
    }
  `],
})
export class ProjectsComponent {
  readonly featuredProjects = PROJECTS.filter((p) => p.featured);
}
