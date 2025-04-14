import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';

import { AboutPage } from './pages/about/about.page';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'about',
    component: AboutPage
  }
];

export const appRouter = provideRouter(routes);
