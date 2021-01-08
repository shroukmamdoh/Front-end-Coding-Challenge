import { Routes } from '@angular/router';
import { LostComponent } from './modules/home/components/lost/lost.component';

export const AppRoutes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'lost',
    component: LostComponent,
  },
  {
    path: '**',
    redirectTo: 'lost',
    pathMatch: 'full',
  }
];
