import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Repos } from '../../../interfaces/repo.interface';
import { format } from 'date-fns';
@Injectable({
  providedIn: 'root',
})
export class RepService {
  specificDate = format(
    new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
    'yyyy-MM-dd'
  );
  constructor(private http: HttpClient) {}
  getRepos(page) {
    return this.http.get<Repos>(
      `${environment.baseUrl}/search/repositories?q=created:>${this.specificDate}&sort=stars&order=desc&page=${page}`
    );
  }
}
