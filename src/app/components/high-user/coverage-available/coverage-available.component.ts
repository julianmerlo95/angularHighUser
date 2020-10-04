import { Component, OnInit } from '@angular/core';
import { CoverageService } from 'src/app/services/coverage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coverage-available',
  templateUrl: './coverage-available.component.html',
  styleUrls: ['./coverage-available.component.sass']
})
export class CoverageAvailableComponent implements OnInit {

  coverages: []
  selectCoverage: object

  constructor(private service: CoverageService,
              private router: Router) {}

  ngOnInit(): void {
    this.service.getCoverage().subscribe((response: []) => this.coverages = response);
  }

  selectPlan(coverage){
    this.selectCoverage = coverage;
    this.nextStep();
  }
  
  nextStep(){
    const user:any = JSON.parse(localStorage.getItem('user'));
    const coverage = this.selectCoverage;
    localStorage.setItem('user', JSON.stringify({...user, coverage}));
    this.router.navigate(['/high/summary']);
  }

  goBack(){
    this.router.navigate(['/high/vehicle']);
  }

}
