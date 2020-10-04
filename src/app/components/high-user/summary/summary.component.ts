import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  information: any = [];
  vehicle: any = [];
  coverage: any = [];
  user;

  constructor(private router: Router) {
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  ngOnInit(): void {
    this.information = this.user.user;
    this.vehicle = this.user.vehicle;
    this.coverage = this.user.coverage;
  }

  goBack(path): any{
    this.router.navigate([`/high/${path}`]);
  }

  goBye(): any{
    localStorage.setItem('user', JSON.stringify({}));
    this.router.navigate([`/goodbye`]);
  }

}
