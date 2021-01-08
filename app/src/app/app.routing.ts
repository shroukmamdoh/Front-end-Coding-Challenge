import { Routes } from '@angular/router';
import { LostComponent } from './modules/home/components/lost/lost.component';

export const AppRoutes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: '404',
    component: LostComponent,
  },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full',
  },
  {
    path: '',
    redirectTo: '404',
    pathMatch: 'full',
  },
];
