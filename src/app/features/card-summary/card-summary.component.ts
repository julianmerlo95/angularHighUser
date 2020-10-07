import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-summary',
  templateUrl: './card-summary.component.html',
  styleUrls: ['./card-summary.component.scss']
})
export class CardSummaryComponent implements OnInit {

  @Input() FechaDeNacimiento: string;
  @Input() municipios: string;
  @Input() provincia: string;
  @Input() domicilio: string;
  @Input() apellido: string;
  @Input() telefono: string;
  @Input() usuario: string;
  @Input() celular: string;
  @Input() nombre: string;
  @Input() email: string;
  @Input() dni: string;
  @Input() ano: string;

  constructor() { }

  ngOnInit(): void {
  }

}
