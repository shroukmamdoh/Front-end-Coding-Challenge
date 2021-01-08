import { Component, OnInit } from '@angular/core';
import { Repos } from 'src/app/interfaces/repo.interface';
import { RepService } from '../../services/repo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  reposList = [];
  page = 1;
  currentPage = 0;
  lastPage;
  direction = 'down';
  count = 0;
  stopFlag = false;
  constructor(private reposService: RepService) {}

  ngOnInit(): void {
    this.loadNextPage();
  }

  loadNextPage() {
    this.reposService.getRepos(this.currentPage).subscribe(
      (data) => {
        console.log('the data before', data['items']);
        this.reposList = this.reposList.concat(data.items);
        console.log('the data after', this.reposList);
      },
      (error) => {
        console.log('error', error.status);
        if (error.status == 403) {
          this.stopFlag = true;
        }
      }
    );
  }

  onScrollDown(event) {
    if (event) {
      if (!this.stopFlag) {
        this.currentPage = this.currentPage + 1;
        console.log('scrolled', this.currentPage);
        this.loadNextPage();
        setTimeout(() => {}, 100);
        this.direction = 'down';
      }
    }
  }
}
