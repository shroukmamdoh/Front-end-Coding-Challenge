import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lost',
  templateUrl: './lost.component.html',
  styleUrls: ['./lost.component.scss']
})
export class LostComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goHome() {
    return this.router.navigate(['recent-repositories'])
  }
}
