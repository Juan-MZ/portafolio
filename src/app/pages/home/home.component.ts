import { Component } from '@angular/core';
import { HeroComponent } from '../../widgets/hero.component';
import { SkillsComponent } from '../../widgets/skills.component';
import { ProjectsComponent } from '../../widgets/projects.component';
import { ContactComponent } from '../../widgets/contact.component';
import { ExperiencePreviewComponent } from '../../widgets/experience-preview.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    ExperiencePreviewComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
  ],
  template: `
    <app-hero></app-hero>
    <app-experience-preview></app-experience-preview>
    <app-skills></app-skills>
    <app-projects></app-projects>
    <app-contact></app-contact>
  `,
})
export class HomeComponent { }
