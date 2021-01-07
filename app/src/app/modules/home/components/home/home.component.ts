import { Component, OnInit } from '@angular/core';
import { Repos } from 'src/app/interfaces/repo.interface';
import { RepService } from '../../services/repo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  reposList: Repos;
  page = 1;
  constructor(private reposService: RepService) {}

  ngOnInit(): void {
    this.reposService.getRepos(this.page).subscribe(
      (data) => {
        this.reposList = data;
      },
      (error) => {}
    );
  }
}
