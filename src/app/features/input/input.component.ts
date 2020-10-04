import { Component, OnInit, Input } from '@angular/core';
import { ValidatorsService } from 'src/app/services/validators.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() inputs;
  @Input() validation;
  @Input() form;
  @Input() type;

  constructor(private validatorService: ValidatorsService) { }

  ngOnInit(): void {    
  }

}
