import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { TEST_REPO, TEST_ROUTES } from 'src/app/shared/shared.test';
import { RepService } from '../../services/repo.service';
import { ReposListComponent } from '../repos-list/repos-list.component';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  const repoService = {
    getRepos: () =>
      of(TEST_REPO).pipe(
        map((e) => {
          return { repo: e };
        })
      ),
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule.withRoutes(TEST_ROUTES)],
      declarations: [HomeComponent, ReposListComponent],
      providers: [{ provide: RepService, useValue: repoService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.reposList = TEST_REPO;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
