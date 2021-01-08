import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { RepoComponent } from './components/repo/repo.component';
import { ReposListComponent } from './components/repos-list/repos-list.component';
import { LostComponent } from './components/lost/lost.component';
import { RouterModule } from '@angular/router';
import { routes } from './home.routing';



@NgModule({
  declarations: [HomeComponent, ReposListComponent, RepoComponent, LostComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
