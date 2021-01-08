import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { RepService } from './repo.service';
import { HttpErrorResponse } from '@angular/common/http';
import { of, throwError } from 'rxjs';
import { Repos } from 'src/app/interfaces/repo.interface';
import { TEST_ROUTES, TEST_REPO } from '../../../shared/shared.test';

describe('RepService', () => {
  let service: RepService;
  let httpClientSpy: any;
  const response = TEST_REPO;
  const errorResponse = new HttpErrorResponse({
    error: 'test 404 error',
    status: 404,
    statusText: 'Not Found',
  });
  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes(TEST_ROUTES),
      ],
      providers: [],
    });
    service = TestBed.inject(RepService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should get the Repos and return success on success and error on errors', () => {
    httpClientSpy['get'].and.callThrough().and.returnValue(of(response));
    service.getRepos(1).subscribe((re: Repos) => {
      expect(re).toEqual(response);
    });
    httpClientSpy['get'].and
      .callThrough()
      .and.returnValue(throwError(errorResponse));
    service.getRepos(1).subscribe(
      (re: Repos) => {},
      (e) => {
        expect(e).toEqual(errorResponse);
      }
    );
  });
});
