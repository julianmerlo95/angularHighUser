import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-coverage',
  templateUrl: './card-coverage.component.html',
  styleUrls: ['./card-coverage.component.scss']
})
export class CardCoverageComponent implements OnInit {

  @Input() codigoProducto: string;
  @Input() franquicia: string;
  @Input() producto: string;
  @Input() puntaje: string;
  @Input() granizo: string;
  @Input() costo: string;

  constructor() { }

  ngOnInit(): void {
  }

}
