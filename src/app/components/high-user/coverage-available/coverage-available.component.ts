import { Component, OnInit } from '@angular/core';
import { CoverageService } from 'src/app/services/coverage.service';

@Component({
  selector: 'app-coverage-available',
  templateUrl: './coverage-available.component.html',
  styleUrls: ['./coverage-available.component.sass']
})
export class CoverageAvailableComponent implements OnInit {

  constructor(private service: CoverageService) {}

  ngOnInit(): void {
    this.service.getCoverage().subscribe((response: []) => {
      console.log(response);
      return
    });
  }
  

}
