import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-home',
  templateUrl: './card-home.component.html',
  styleUrls: ['./card-home.component.scss']
})
export class CardHomeComponent implements OnInit {

  @Input() img:any;
  @Input() title:any;
  @Input() description:any;

  constructor() { }

  ngOnInit(): void {
  }

}
