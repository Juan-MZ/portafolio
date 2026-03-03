import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsPageComponent } from './pages/projects/projects-page.component';
import { ExperiencePageComponent } from './pages/experience/experience-page.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'projects', component: ProjectsPageComponent },
  { path: 'experience', component: ExperiencePageComponent },
  { path: '**', redirectTo: '' },
];
