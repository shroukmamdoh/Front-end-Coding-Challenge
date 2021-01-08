import { Component, OnInit } from '@angular/core';
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
        this.reposList = this.reposList.concat(data.items);
      },
      (error) => {
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
        this.loadNextPage();
        setTimeout(() => {}, 100);
        this.direction = 'down';
      }
    }
  }
}
