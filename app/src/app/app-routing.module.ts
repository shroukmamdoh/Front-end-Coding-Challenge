import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LostComponent } from './modules/home/components/lost/lost.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/home/home.module').then((m) => m.HomeModule)
  },
  {
    path: '404',
    component: LostComponent
  },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: '404',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
