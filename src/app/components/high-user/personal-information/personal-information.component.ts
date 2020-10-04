import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { LocationService } from 'src/app/services/location.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { input, inputsUserPass } from './inputData';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss']
})
export class PersonalInformationComponent implements OnInit {

  inputs;
  inputsUserPass;
  provincias: [];
  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private locationService: LocationService,
              private userService: UserService,
              private router: Router) {
    this.inputs = input;
    this.inputsUserPass = inputsUserPass;
    this.locationService.getLocation().subscribe(response => this.provincias = response);
    this.loadForm();
  }

  ngOnInit(): void {
  }

  loadForm(): any{
    const user = JSON.parse(localStorage.getItem('user'));
    this.form = this.formBuilder.group({
      dni : [Object.keys(user).length > 1 ? user.user[0].dni : '' ,
        [Validators.required, Validators.pattern('^[0-9]*$'), Validators.minLength(7), Validators.maxLength(8)]],
      nombre : [Object.keys(user).length > 1 ? user.user[0].nombre : '' ,
        [Validators.required, Validators.pattern('^[a-zA-Z ]*$'), Validators.minLength(2), Validators.maxLength(15)]],
      apellido : [Object.keys(user).length > 1 ? user.user[0].apellido : '' ,
        [Validators.required, Validators.pattern('^[a-zA-Z ]*$'), Validators.minLength(2), Validators.maxLength(15)]],
      email : [Object.keys(user).length > 1 ? user.user[0].email : '' ,
        [Validators.required, Validators.email]],
      celular : [Object.keys(user).length > 1 ? user.user[0].celular : '' ,
        [Validators.required, Validators.pattern('^[0-9]*$')]],
      telefono : [Object.keys(user).length > 1 ? user.user[0].telefono : '' ,
        [Validators.required, Validators.pattern('^[0-9]*$')]],
      FechaDeNacimiento : [Object.keys(user).length > 1  ? user.user[0].FechaDeNacimiento : '' ,
        [Validators.required, this.userService.dateValidate]],
      provincia: [Object.keys(user).length > 1 ? user.user[0].provincia : '' , [Validators.required]],
      usuario: [Object.keys(user).length > 1 ? user.user[0].usuario : '' ,
        [Validators.required, this.userService.validate, Validators.minLength(7), Validators.maxLength(8)]],
      contraseña: [Object.keys(user).length > 1 ? user.user[0].contraseña : '' ,
        [Validators.required, Validators.minLength(7)]]
    });
  }

  nextStep(): any{
    if ( this.form.invalid ) {
      return Object.values( this.form.controls ).forEach( control => {
        if ( control instanceof FormGroup ) {
          return Object.values( control.controls ).forEach( control => control.markAsTouched() );
        } else {
          return control.markAsTouched();
        }
      });
    }
    const user = JSON.parse(localStorage.getItem('user'));
    localStorage.setItem('user', JSON.stringify({...user, user: [this.form.value]}));
    return this.router.navigate(['/high/vehicle']);
  }

}
