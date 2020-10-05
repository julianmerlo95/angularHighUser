import { Component, OnInit } from '@angular/core';
import { CoverageService } from 'src/app/services/coverage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coverage-available',
  templateUrl: './coverage-available.component.html',
  styleUrls: ['./coverage-available.component.scss']
})
export class CoverageAvailableComponent implements OnInit {

  coverages: [];
  selectCoverage: object;
  loadingData: boolean;

  constructor(private service: CoverageService,
              private router: Router) {
                this.loadingData = true;
              }

  ngOnInit(): void {
    this.service.getCoverage().subscribe((response: []) => {
      this.loadingData = false;
      return this.coverages = response;

    });
  }

  selectPlan(coverage): any{
    this.selectCoverage = coverage;
    this.nextStep();
  }

  nextStep(): any{
    const user: any = JSON.parse(localStorage.getItem('user'));
    const coverage = this.selectCoverage;
    localStorage.setItem('user', JSON.stringify({...user, coverage: [coverage]}));
    this.router.navigate(['/high/summary']);
  }

  goBack(): any{
    this.router.navigate(['/high/vehicle']);
  }

}
