import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-vehicle',
  templateUrl: './card-vehicle.component.html',
  styleUrls: ['./card-vehicle.component.scss']
})
export class CardVehicleComponent implements OnInit {

  @Input() ano :string
  @Input() marca :string
  @Input() modelo :string
  @Input() version :string

  constructor() { }

  ngOnInit(): void {
  }

}
