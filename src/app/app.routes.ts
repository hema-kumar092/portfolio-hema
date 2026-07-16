import { Routes } from '@angular/router';
import { Home } from './home/home';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },

  // Unknown URL vandha home-ku redirect aagum
  {
    path: '**',
    redirectTo: ''
  }
];