import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-summary',
  templateUrl: './card-summary.component.html',
  styleUrls: ['./card-summary.component.scss']
})
export class CardSummaryComponent implements OnInit {

  @Input() nombre :string
  @Input() apellido :string
  @Input() dni :string
  @Input() email :string
  @Input() FechaDeNacimiento :string
  @Input() provincia :string
  @Input() municipios :string
  @Input() celular :string
  @Input() telefono :string
  @Input() usuario :string
  @Input() ano :string

  constructor() { }

  ngOnInit(): void {
  }

}
