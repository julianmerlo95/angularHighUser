import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  img: any;

  constructor(private router: Router) {
    this.img = '../../../assets/img/imgSeguro.jpg';
    console.log(this.img);

  }

  ngOnInit(): void {
  }

  nextStep(): any{
    this.router.navigate(['/high/information']);
  }

}
