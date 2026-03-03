import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  icon: string;
  category: 'Frontend' | 'Backend' | 'Herramientas' | 'Aprendiendo';
  url: string;
}

const ALL_SKILLS: Skill[] = [
  // Frontend
  { name: 'Angular', icon: 'devicon-angular-plain', category: 'Frontend', url: 'https://angular.dev' },
  { name: 'React', icon: 'devicon-react-original', category: 'Frontend', url: 'https://react.dev' },
  { name: 'Flutter', icon: 'devicon-flutter-plain', category: 'Frontend', url: 'https://flutter.dev' },
  { name: 'HTML', icon: 'devicon-html5-plain', category: 'Frontend', url: 'https://developer.mozilla.org/docs/Web/HTML' },
  { name: 'CSS', icon: 'devicon-css3-plain', category: 'Frontend', url: 'https://developer.mozilla.org/docs/Web/CSS' },
  { name: 'JavaScript', icon: 'devicon-javascript-plain', category: 'Frontend', url: 'https://developer.mozilla.org/docs/Web/JavaScript' },
  { name: 'TypeScript', icon: 'devicon-typescript-plain', category: 'Frontend', url: 'https://www.typescriptlang.org' },
  // Backend
  { name: 'Java', icon: 'devicon-java-plain', category: 'Backend', url: 'https://www.java.com' },
  { name: 'Spring Boot', icon: 'devicon-spring-plain', category: 'Backend', url: 'https://spring.io/projects/spring-boot' },
  { name: 'Python', icon: 'devicon-python-plain', category: 'Backend', url: 'https://www.python.org' },
  { name: 'PostgreSQL', icon: 'devicon-postgresql-plain', category: 'Backend', url: 'https://www.postgresql.org' },
  { name: 'MongoDB', icon: 'devicon-mongodb-plain', category: 'Backend', url: 'https://www.mongodb.com' },
  { name: 'Oracle Cloud', icon: 'devicon-oracle-plain', category: 'Backend', url: 'https://www.oracle.com/cloud' },
  // Herramientas
  { name: 'Git', icon: 'devicon-git-plain', category: 'Herramientas', url: 'https://git-scm.com' },
  { name: 'Docker', icon: 'devicon-docker-plain', category: 'Herramientas', url: 'https://www.docker.com' },
  { name: 'Postman', icon: 'devicon-postman-plain', category: 'Herramientas', url: 'https://www.postman.com' },
  { name: 'VS Code', icon: 'devicon-vscode-plain', category: 'Herramientas', url: 'https://code.visualstudio.com' },
  { name: 'GitHub', icon: 'devicon-github-original', category: 'Herramientas', url: 'https://github.com' },
  // Aprendiendo
  { name: 'AWS', icon: 'devicon-amazonwebservices-plain-wordmark', category: 'Aprendiendo', url: 'https://aws.amazon.com' },
  { name: 'Kubernetes', icon: 'devicon-kubernetes-plain', category: 'Aprendiendo', url: 'https://kubernetes.io' },
  { name: 'GraphQL', icon: 'devicon-graphql-plain', category: 'Aprendiendo', url: 'https://graphql.org' },
];

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="habilidades" class="skills-section">
      <div class="container">
        <div class="section-header">
          <h2>Tecnologías</h2>
          <p class="subtitle">En mi trayectoria he cultivado experiencia en una variedad de tecnologías.</p>
        </div>

        <div class="categories-grid">
          <div *ngFor="let group of groups" class="category-card" [class]="'card-' + group.colorClass">
            <h3 class="category-title">{{ group.category }}</h3>
            <ul class="skills-list">
              <li *ngFor="let skill of group.skills">
                <a [href]="skill.url" target="_blank" rel="noopener noreferrer" class="skill-item">
                  <i [class]="skill.icon + ' skill-icon colored'"></i>
                  <span class="skill-name">{{ skill.name }}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .skills-section {
      padding: 5rem 2rem;
      background: transparent;
    }

    .container {
      max-width: 960px;
      margin: 0 auto;
    }

    .section-header {
      margin-bottom: 3rem;
    }

    h2 {
      font-size: 2rem;
      font-weight: 700;
      color: var(--text-primary);
      margin: 0 0 0.5rem 0;
    }

    .subtitle {
      color: var(--text-secondary);
      font-size: 1rem;
      margin: 0;
    }

    .categories-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem;
    }

    .category-card {
      border-radius: 16px;
      padding: 2rem;
      border: 1px solid rgba(255,255,255,0.08);
      background: linear-gradient(to bottom right, rgba(255,255,255,0.05), rgba(0,0,0,0.3));
    }

    .category-title {
      font-size: 1.75rem;
      font-weight: 700;
      text-align: center;
      margin: 0 0 1.75rem 0;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    /* Gradients per category, matching the reference */
    .card-frontend .category-title {
      background-image: linear-gradient(to top, #c3feff, #00b9e2);
    }
    .card-backend .category-title {
      background-image: linear-gradient(to top, #7ca5ff, #0004ff);
      -webkit-text-fill-color: transparent;
    }
    .card-herramientas .category-title {
      background-image: linear-gradient(to top, #d28eff, #8e00ec);
    }
    .card-aprendiendo .category-title {
      background-image: linear-gradient(to top, #faffb2, #ffee00);
    }

    .skills-list {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 0.875rem;
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .skills-list li {
      display: contents;
    }

    .skill-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 0.6rem;
      padding: 1rem 0.5rem;
      border-radius: 12px;
      background: rgba(255,255,255,0.05);
      border: 1px solid rgba(255,255,255,0.1);
      transition: all 0.2s ease;
      cursor: pointer;
      text-decoration: none;
    }

    .skill-item:hover {
      background: rgba(255,255,255,0.1);
      border-color: rgba(255,255,255,0.25);
      transform: translateY(-2px);
    }

    .skill-icon {
      font-size: 3rem;
      line-height: 1;
    }

    .skill-name {
      font-size: 0.75rem;
      font-weight: 600;
      color: var(--text-primary);
      text-align: center;
      line-height: 1.3;
    }

    @media (max-width: 768px) {
      .skills-section { padding: 3rem 1.5rem; }
      h2 { font-size: 1.75rem; }
      .categories-grid { grid-template-columns: 1fr; }
      .category-title { font-size: 1.4rem; }
    }
  `]
})
export class SkillsComponent {
  readonly groups = [
    { category: 'Frontend', colorClass: 'frontend', skills: ALL_SKILLS.filter(s => s.category === 'Frontend') },
    { category: 'Backend', colorClass: 'backend', skills: ALL_SKILLS.filter(s => s.category === 'Backend') },
    { category: 'Herramientas', colorClass: 'herramientas', skills: ALL_SKILLS.filter(s => s.category === 'Herramientas') },
    { category: 'Aprendiendo', colorClass: 'aprendiendo', skills: ALL_SKILLS.filter(s => s.category === 'Aprendiendo') },
  ];
}

