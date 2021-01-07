import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Repos } from '../../../interfaces/repo.interface';
@Injectable({
  providedIn: 'root',
})
export class RepService {
  currentDate = '2020-12-07';
  constructor(private http: HttpClient) {}
  getRepos(page) {
    return this.http.get<Repos>(
      `${environment.baseUrl}/search/repositories?q=created:>${this.currentDate}&sort=stars&order=desc&page=${page}`
    );
  }
}
