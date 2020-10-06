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
  @Input() column;

  constructor(private validatorService: ValidatorsService) { }

  ngOnInit(): void {
  }


  availableUser(value, form): any{
    console.log('entro');

    if (form.value.usuario){
      this.validatorService.userValidate(value.value).subscribe(response => {
        if (response){
          form.controls.usuario.status = 'INVALID';
          }
        });
      }
    }
  }
