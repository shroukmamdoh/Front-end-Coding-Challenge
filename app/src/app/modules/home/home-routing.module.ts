import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReposListComponent } from './components/repos-list/repos-list.component';

const routes: Routes = [
  {
    path: 'recent-repositories',
    component: ReposListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
