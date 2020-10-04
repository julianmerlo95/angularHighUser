import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.sass']
})
export class SummaryComponent implements OnInit {

  information: any = []
  vehicle: any = []
  coverage: any = []
  user;

  constructor() { 
    this.user = JSON.parse(localStorage.getItem('user'));    
  }

  ngOnInit(): void {
    this.information.push(this.user.user) ;
    this.vehicle.push(this.user.vehicle) 
    this.coverage.push(this.user.coverage) 
    console.log(this.coverage);
    
  }

}
