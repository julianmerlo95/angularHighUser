import { Component, OnInit, Input } from '@angular/core';
import { ValidatorsService } from 'src/app/services/validators.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() validation;
  @Input() inputs;
  @Input() column;
  @Input() form;
  @Input() type;

  constructor(private validatorService: ValidatorsService) { }

  ngOnInit(): void {
  }


  availableUser(value, form): any{
    if (form.value.usuario){
      this.validatorService.userValidate(value.value).subscribe(response => {
        if (response){
          form.controls.usuario.status = 'INVALID';
          }
        });
      }
    }
  }
