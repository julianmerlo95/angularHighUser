import { Component, OnInit, Input } from '@angular/core';
import { ValidatorsService } from 'src/app/services/validators.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  @Input() elements;
  @Input() form;
  @Input() labelName;
  @Input() name;
  @Input() item;
  @Input() itemTwo;

  constructor(private validatorService: ValidatorsService) {
  }

  ngOnInit(): void {
  }

}
